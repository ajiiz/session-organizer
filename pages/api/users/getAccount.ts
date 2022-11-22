import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type GetAccountRequest = { userEmail: string };

export type GetAccountResponse = { email: string; firstName: string; lastName: string; number: string };

export const path = "api/users/getAccount";

export const getAccount: NextApiHandler<GetAccountResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const { userEmail } = req.query as unknown as GetAccountRequest;

  if (!userEmail) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
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

  if (user.email !== userEmail) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.json({ firstName: user.firstName, lastName: user.lastName, email: user.email, number: user.number ?? "" });
};

export default getAccount;
