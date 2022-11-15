import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type UpdateAccountRequest = { email: string; firstName: string; lastName: string; number: string };

export const path = "api/users/updateAccount";

export const updateAccount: NextApiHandler<UpdateAccountRequest> = async (req, res) => {
  const prisma = new PrismaClient();

  const { email, firstName, lastName, number } = req.body.params as UpdateAccountRequest;

  if (!email && !firstName && !lastName && !number) {
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

  const user = await prisma.user.findFirst({ where: { email: session.user.email } });

  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  if (user.email !== email) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const updatedUser = await prisma.user.update({
    where: { email: session.user.email },
    data: {
      email,
      firstName,
      lastName,
      number
    }
  });

  if (!updatedUser) {
    res.statusMessage = `User could not be updated`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default updateAccount;
