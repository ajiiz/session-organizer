import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type UpdateEventRequest = { eventId: string; status: string };

export const path = "api/events/updateEvent";

export const updateEvent: NextApiHandler<UpdateEventRequest> = async (req, res) => {
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

  const { eventId, status } = req.body.params as UpdateEventRequest;

  if (!eventId || !status) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const event = await prisma.event.update({
    where: { id: eventId },
    data: { status: status }
  });

  if (!event) {
    res.statusMessage = `Event could not be found`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default updateEvent;
