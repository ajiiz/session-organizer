import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { GroupFormData } from "styled/components/creation/useCreation";

export type LeaveGroupRequest = { groupId: string };

export const path = "api/groups/leaveGroup";

export const leaveGroup: NextApiHandler<LeaveGroupRequest> = async (req, res) => {
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

  const { groupId } = req.body.params as LeaveGroupRequest;

  if (!groupId) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const group = await prisma.group.findFirst({
    where: { id: groupId }
  });
  if (!group) {
    res.statusMessage = `Group could not be found`;
    res.status(400).end();
    return;
  }

  const updatedUser = await prisma.user.update({
    where: { email: session.user.email },
    data: {
      groups: {
        disconnect: {
          id: group.id
        }
      }
    }
  });
  if (!updatedUser) {
    res.statusMessage = `User could not be disconnected to the group`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default leaveGroup;
