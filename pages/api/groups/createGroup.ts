import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { GroupFormData } from "styled/components/creation/useCreation";

export const path = "api/groups/createGroup";

export const createGroup: NextApiHandler<GroupFormData> = async (req, res) => {
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

  const { name, details, groupCode } = req.body.params as GroupFormData;

  if (!name || !details || !groupCode) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const newGroup = await prisma.group.create({
    data: {
      name,
      description: details,
      groupCode: groupCode,
      creatorId: user.id,
      users: {
        connect: {
          id: user.id
        }
      }
    }
  });
  if (!newGroup) {
    res.statusMessage = `Group could not be created`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default createGroup;
