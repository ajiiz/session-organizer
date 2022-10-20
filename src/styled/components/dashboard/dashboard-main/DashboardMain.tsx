import { useEffect, useMemo, useState } from "react";
import { Event } from "@prisma/client";
import { getEvents } from "network/events/getEvents";
import EventsNotFound from "../events-not-found/EventsNotFound";
import EventSection from "../events-section/EventSection";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import * as S from "./DashboardMain.styled";

const DashboardMain = () => {
  const currentDate = useSelector((state: RootState) => state.calendar.date);
  const [events, setEvents] = useState<null | Event[]>();
  const [shouldShowAll, setShouldShowAll] = useState(false);
  const currentShowedEvents = useMemo(() => {
    if (!shouldShowAll) {
      return events?.slice(0, 3);
    }
    return events;
  }, [events, shouldShowAll]);
  const shouldShowButton = (events?.length ?? 0) > 3;

  useEffect(() => {
    fetchEvents();
  }, [currentDate]);

  const fetchEvents = async () => {
    try {
      const data = await getEvents({ date: currentDate });
      setEvents(data.events);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.ContentWrapper customMargin={!shouldShowButton}>
      {currentShowedEvents && currentShowedEvents.length > 0 ? (
        <S.EventsWrapper>
          <EventSection events={currentShowedEvents} />
          {shouldShowButton && (
            <S.Button type="button" onClick={() => setShouldShowAll(!shouldShowAll)}>
              {shouldShowAll ? "Show only first three" : "Show all"}
            </S.Button>
          )}
        </S.EventsWrapper>
      ) : (
        <EventsNotFound />
      )}
    </S.ContentWrapper>
  );
};

export default DashboardMain;
