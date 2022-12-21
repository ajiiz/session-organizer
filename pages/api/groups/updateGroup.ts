import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type UpdateGroupRequest = { groupId: string; foremanId: string };

export const path = "api/groups/updateGroup";

export const updateGroup: NextApiHandler<UpdateGroupRequest> = async (req, res) => {
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

  const { groupId, foremanId } = req.body.params as UpdateGroupRequest;

  if (!groupId || !foremanId) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const group = await prisma.group.update({
    where: { id: groupId },
    data: {
      foreman: {
        connect: {
          id: foremanId
        }
      }
    }
  });
  if (!group) {
    res.statusMessage = `Group could not be updated`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default updateGroup;
