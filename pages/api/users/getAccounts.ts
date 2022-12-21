import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type GetAccountsResponse = { id: string; email: string; firstName: string; lastName: string; role: string }[];

export const path = "api/users/getAccounts";

export const getAccounts: NextApiHandler<GetAccountsResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  if (session.user.role !== "administrator") {
    res.statusMessage = `User is not authorized to perform this action`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({
    where: { email: session.user.email },
    include: { events: true, groups: { include: { events: true } } }
  });

  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  const users = await prisma.user.findMany({
    select: { id: true, email: true, firstName: true, lastName: true, role: true }
  });
  if (!users) {
    res.statusMessage = `Users could not be found`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  const filteredUsers = users.filter(user => user.email !== session.user.email);

  res.json(filteredUsers);
};

export default getAccounts;
