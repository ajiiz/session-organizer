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
    </S.ContentWrapper>
  );
};

export default DashboardMain;
