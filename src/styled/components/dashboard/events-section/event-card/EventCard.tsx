import { Event } from "@prisma/client";
import { getTime } from "utils/DateUtilities";
import * as S from "./EventCard.styled";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <S.EventCard key={event.id}>
      <S.EventHeader>{event.name}</S.EventHeader>
      <S.EventParagraph>{event.description}</S.EventParagraph>
      <S.EventDateTime>
        <S.EventTime>
          <S.EventTimeName>Start time</S.EventTimeName>
          <S.EventTimeDetails>{getTime(event.startDate)}</S.EventTimeDetails>
        </S.EventTime>
        <S.EventTime>
          <S.EventTimeName>End time</S.EventTimeName>
          <S.EventTimeDetails>{getTime(event.endDate)}</S.EventTimeDetails>
        </S.EventTime>
      </S.EventDateTime>
    </S.EventCard>
  );
};

export default EventCard;
