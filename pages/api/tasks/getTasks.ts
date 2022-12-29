import { DailyToDo, PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export const path = "api/tasks/getTasks";

export type GetTasksResponse = { tasks: DailyToDo[] };

export const getTasks: NextApiHandler<GetTasksResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({
    where: { email: session.user.email },
    include: { todos: true }
  });
  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  if (!user.todos) {
    res.statusMessage = `Groups could not be found`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.json({ tasks: user.todos });
};

export default getTasks;
