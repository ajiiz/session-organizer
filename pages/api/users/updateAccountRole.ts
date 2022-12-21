import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type UpdateAccountRoleRequest = { userId: string; role: string };

export const path = "api/users/updateAccountRole";

export const updateAccountRole: NextApiHandler<UpdateAccountRoleRequest> = async (req, res) => {
  const prisma = new PrismaClient();

  const { userId, role } = req.body.params as UpdateAccountRoleRequest;

  if (!userId && !role) {
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

  if (session.user.role !== "administrator") {
    res.statusMessage = `User is not authorized to perform this action`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({ where: { email: session.user.email } });

  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  const updatedUser = await prisma.user.update({ where: { id: userId }, data: { role } });

  if (!updatedUser) {
    res.statusMessage = `User could not be updated`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default updateAccountRole;
