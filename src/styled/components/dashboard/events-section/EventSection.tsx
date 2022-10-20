import EventCard from "./event-card/EventCard";
import { Event } from "@prisma/client";
import * as S from "./EventSection.styled";

interface EventSectionProps {
  events: Event[];
}

const EventSection = ({ events }: EventSectionProps) => {
  return (
    <>
      <S.TextWrapper>
        <S.Header>Your todays upcoming events</S.Header>
        <S.Paragraph>View your future events and filter them by date.</S.Paragraph>
      </S.TextWrapper>
      {events.map(event => (
        <EventCard event={event} key={event.id} />
      ))}
    </>
  );
};

export default EventSection;
