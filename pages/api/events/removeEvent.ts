import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type RemoveEventRequest = { eventId: string };

export const path = "api/events/removeEvent";

export const removeEvent: NextApiHandler<RemoveEventRequest> = async (req, res) => {
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

  const { eventId } = req.query as RemoveEventRequest;

  if (!eventId) {
    res.statusMessage = `Malformed request data`;
    res.status(400).end();
    return;
  }

  const event = await prisma.event.findFirst({
    where: { id: eventId }
  });
  if (!event) {
    res.statusMessage = `Event could not be found`;
    res.status(400).end();
    return;
  }

  const updatedUser = await prisma.user.update({
    where: { email: session.user.email },
    data: {
      events: {
        disconnect: {
          id: event.id
        }
      }
    }
  });
  if (!updatedUser) {
    res.statusMessage = `User could not be disconnected from the event`;
    res.status(400).end();
    return;
  }

  prisma.$disconnect();

  res.status(200).end();
};

export default removeEvent;
