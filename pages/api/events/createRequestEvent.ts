import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { RequestAndGroupEventFormData } from "styled/components/creation/useCreation";
import { getDateTimeFromString } from "utils/DateUtilities";

export const path = "api/events/createRequestEvent";

export const createRequestEvent: NextApiHandler<RequestAndGroupEventFormData> = async (req, res) => {
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

  const { name, details, startDate, endDate, startTime, endTime, groupId } = req.body
    .params as RequestAndGroupEventFormData;

  if (!name || !details || !startDate || !endDate || !startTime || !endTime || !groupId) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const convertedStartDate = getDateTimeFromString(startDate, startTime);
  const convertedEndDate = getDateTimeFromString(endDate, endTime);

  const newEvent = await prisma.event.create({
    data: {
      name,
      description: details,
      startDate: convertedStartDate,
      endDate: convertedEndDate,
      userId: user.id,
      status: "request",
      groupId: groupId
    }
  });

  if (!newEvent) {
    res.statusMessage = `Event could not be created`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default createRequestEvent;
