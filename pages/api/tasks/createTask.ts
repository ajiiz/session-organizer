import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export const path = "api/tasks/createTask";

export type CreateTaskRequest = { task: string };

export const createTask: NextApiHandler<CreateTaskRequest> = async (req, res) => {
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

  if (user.todos.length >= 6) {
    res.statusMessage = `User has too many tasks. Maximum value is 6.`;
    res.status(400).end();
    return;
  }

  const { task } = req.body.params as CreateTaskRequest;

  if (!task) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const newTodo = await prisma.dailyToDo.create({
    data: {
      text: task,
      userId: user.id
    }
  });
  if (!newTodo) {
    res.statusMessage = `Group could not be created`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default createTask;
