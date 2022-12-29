import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type DeleteTaskRequest = { taskId: string };

export const path = "api/tasks/deleteTask";

export const deleteTask: NextApiHandler<DeleteTaskRequest> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({
    where: { email: session.user.email }
  });
  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  const { taskId } = req.body.params as DeleteTaskRequest;

  if (!taskId) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const deletedTask = await prisma.dailyToDo.delete({
    where: { id: taskId }
  });
  if (!deletedTask) {
    res.statusMessage = `Task could not be deleted`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default deleteTask;
