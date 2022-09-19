import { useEffect, useState } from "react";
import { Event } from "@prisma/client";
import { getEvents } from "network/events/getEvents";
import * as S from "./DashboardMain.styled";

const DashboardMain = () => {
  const [events, setEvents] = useState<null | Event[]>();

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
      <S.TextWrapper>
        <S.Header>Your todays upcoming events</S.Header>
        <S.Paragraph>View your future events and filter them by date.</S.Paragraph>
      </S.TextWrapper>
      <S.EventsWrapper>
        {events ? (
          events.map(event => (
            /* This should be another component */
            <S.EventCard key={event.id}>
              <S.EventHeader>{event.name}</S.EventHeader>
              <S.EventParagraph>{event.description}</S.EventParagraph>
              <S.EventDateTime>
                <S.EventTime>
                  <S.EventTimeName>Start time</S.EventTimeName>
                  <S.EventTimeDetails>{event.startDate}</S.EventTimeDetails>
                </S.EventTime>
                <S.EventTime>
                  <S.EventTimeName>End time</S.EventTimeName>
                  <S.EventTimeDetails>{event.endDate}</S.EventTimeDetails>
                </S.EventTime>
              </S.EventDateTime>
            </S.EventCard>
          ))
        ) : (
          /* This should be another component */
          <div>There will be component that shows not found</div>
        )}
      </S.EventsWrapper>
    </S.ContentWrapper>
  );
};

export default DashboardMain;
