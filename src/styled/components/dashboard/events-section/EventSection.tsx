import EventCard from "./event-card/EventCard";
import { Event } from "@prisma/client";
import PageInformation from "styled/components/shared/page-info/PageInformation";

interface Props {
  events: Event[];
}

const EventSection = ({ events }: Props) => {
  return (
    <>
      <PageInformation
        shouldCenterOnMobile={true}
        header={"Your todays upcoming events"}
        paragraph={"View your future events and filter them by date."}
      />
      {events.map(event => (
        <EventCard event={event} key={event.id} />
      ))}
    </>
  );
};

export default EventSection;
