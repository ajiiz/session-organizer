import { Group, PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export const path = "api/groups/getGroups";

export interface GroupType extends Group {
  numberOfStudents: number;
}

export type GetGroupsResponse = { groups: GroupType[] };

export const getGroups: NextApiHandler<GetGroupsResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const session = await getSession({ req });
  if (!session?.user?.email) {
    res.statusMessage = `User is not logged in`;
    res.status(400).end();
    return;
  }

  const user = await prisma.user.findFirst({
    where: { email: session.user.email },
    include: { groups: { include: { users: true } } }
  });
  if (!user) {
    res.statusMessage = `User could not be found`;
    res.status(400).end();
    return;
  }

  if (!user.groups) {
    res.statusMessage = `Groups could not be found`;
    res.status(400).end();
    return;
  }

  let response: GroupType[] = [];
  for (const group of user.groups) {
    const numberOfStudents = group.users.length;
    response.push({ ...group, numberOfStudents });
  }

  prisma.$disconnect();

  res.json({ groups: response });
};

export default getGroups;
