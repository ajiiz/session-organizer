import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { RequestAndGroupEventFormData } from "styled/components/creation/useCreation";
import { getDateTimeFromString } from "utils/DateUtilities";
import { areDatesValid, getEventStatus, Status } from "utils/EventUtilities";

export const path = "api/events/createRequestAndGroupEvent";

export type RequestAndGroupEventType = RequestAndGroupEventFormData & { statusType: Status };

export const createRequestAndGroupEvent: NextApiHandler<RequestAndGroupEventType> = async (req, res) => {
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

  const { name, details, startDate, endDate, startTime, endTime, groupId, statusType } = req.body
    .params as RequestAndGroupEventType;

  if (!name || !details || !startDate || !endDate || !startTime || !endTime || !groupId || !statusType) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const convertedStartDate = getDateTimeFromString(startDate, startTime);
  const convertedEndDate = getDateTimeFromString(endDate, endTime);

  const datesValid = areDatesValid(convertedStartDate, convertedEndDate);
  if (!datesValid) {
    res.statusMessage = `Start date must be before end date`;
    res.status(400).end();
    return;
  }

  const eventStatus = statusType === "request" ? "request" : getEventStatus(convertedStartDate, convertedEndDate);

  const newEvent = await prisma.event.create({
    data: {
      name,
      description: details,
      startDate: convertedStartDate,
      endDate: convertedEndDate,
      status: eventStatus,
      groupId: groupId
    }
  });

  if (!newEvent) {
    res.statusMessage = `Request could not be created`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default createRequestAndGroupEvent;
