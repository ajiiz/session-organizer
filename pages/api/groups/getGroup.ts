import { Group, PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type GetGroupRequest = { groupId: string };

export type GetGroupResponse = Group & {
  foreman: { id: string; firstName: string; lastName: string; email: string } | null;
} & {
  users: { id: string; firstName: string; lastName: string; email: string }[];
};

export const path = "api/groups/getGroup";

export const getGroup: NextApiHandler<GetGroupResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const { groupId } = req.query as unknown as GetGroupRequest;

  if (!groupId) {
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
    include: { events: true, groups: { include: { foreman: true, users: true } } }
  });

  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  const group = user.groups.find(group => group.id === groupId);
  if (!group) {
    res.statusMessage = `Group could not be found`;
    res.status(400).end();
    return;
  }

  let foreman = null;
  if (group.foremanId) {
    foreman = await prisma.user.findFirst({
      where: { id: group?.foremanId as string },
      select: { id: true, firstName: true, lastName: true, email: true }
    });
  }

  prisma.$disconnect();

  res.json({ ...group, foreman });
};

export default getGroup;
