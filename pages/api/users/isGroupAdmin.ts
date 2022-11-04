import { PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type IsGroupAdminRequest = { userEmail: string; groupId?: string };

export type IsGroupAdminResponse = { isGroupAdmin: boolean };

export const path = "api/users/isGroupAdmin";

export const isGroupAdmin: NextApiHandler<IsGroupAdminResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const { userEmail, groupId } = req.query as unknown as IsGroupAdminRequest;

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

  if (groupId) {
    const group = await prisma.group.findFirst({ where: { id: groupId, foremanId: user.id } });
    if (group) {
      return res.json({ isGroupAdmin: true });
    }
  }

  const userGroupsWithAdmin = await prisma.group.findMany({ where: { foremanId: user.id } });
  if (userGroupsWithAdmin.length > 0) {
    return res.json({ isGroupAdmin: true });
  }

  prisma.$disconnect();

  res.json({ isGroupAdmin: false });
};

export default isGroupAdmin;
