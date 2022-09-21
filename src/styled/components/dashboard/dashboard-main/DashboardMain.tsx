import { useEffect, useMemo, useState } from "react";
import { Event } from "@prisma/client";
import { getEvents } from "network/events/getEvents";
import EventsNotFound from "../events-not-found/EventsNotFound";
import * as S from "./DashboardMain.styled";
import EventSection from "../events-section/EventSection";

const DashboardMain = () => {
  const [events, setEvents] = useState<null | Event[]>();
  const [shouldShowAll, setShouldShowAll] = useState(false);
  const currentShowedEvents = useMemo(() => {
    if (!shouldShowAll) {
      return events?.slice(0, 3);
    }
    return events;
  }, [events, shouldShowAll]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data.events);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.ContentWrapper>
      {currentShowedEvents && currentShowedEvents.length > 0 ? (
        <S.EventsWrapper>
          <EventSection events={currentShowedEvents} />
          <S.Button type="button" onClick={() => setShouldShowAll(!shouldShowAll)}>
            {shouldShowAll ? "Show only first three" : "Show all"}
          </S.Button>
        </S.EventsWrapper>
      ) : (
        <EventsNotFound />
      )}
    </S.ContentWrapper>
  );
};

export default DashboardMain;
