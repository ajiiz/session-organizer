import { useEffect, useMemo, useState } from "react";
import { Event } from "@prisma/client";
import { getEvents } from "network/events/getEvents";
import EventsNotFound from "../events-not-found/EventsNotFound";
import EventSection from "../events-section/EventSection";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import * as S from "./DashboardMain.styled";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import { Loader } from "styled/elements/shared/Loader";

const DashboardMain = () => {
  const currentDate = useSelector((state: RootState) => state.calendar.date);
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(true);
    try {
      const data = await getEvents({ date: currentDate });
      setEvents(data.events);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SS.ContentWrapper customMargin={!shouldShowButton}>
      {isLoading ? (
        <Wrapper width={"100%"} height={"10rem"} display={"flex"}>
          <Loader />
        </Wrapper>
      ) : currentShowedEvents && currentShowedEvents.length > 0 ? (
        <SS.ContentContainer>
          <EventSection events={currentShowedEvents} />
          {shouldShowButton && (
            <S.Button type="button" onClick={() => setShouldShowAll(!shouldShowAll)}>
              {shouldShowAll ? "Show only first three" : "Show all"}
            </S.Button>
          )}
        </SS.ContentContainer>
      ) : (
        <EventsNotFound />
      )}
    </SS.ContentWrapper>
  );
};

export default DashboardMain;
