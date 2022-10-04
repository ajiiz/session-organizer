import { Event, PrismaClient } from "@prisma/client";
import type { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

export type GetEventsRequest = { date: Date };

export type GetEventsResponse = { events: Event[] };

export const path = "api/events/getEvents";

export const getEvents: NextApiHandler<GetEventsResponse> = async (req, res) => {
  const prisma = new PrismaClient();

  const requestedData = req.query as unknown as GetEventsRequest;

  if (!requestedData.date) {
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

  const allEvents = [...user.events, ...user.groups.map(group => group.events)]
    .flat()
    .sort((a, b) => Number(a.startDate) - Number(b.endDate));

  prisma.$disconnect();

  res.json({ events: allEvents });
};

export default getEvents;
