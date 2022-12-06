import { useEffect, useState } from "react";
import { Event } from "@prisma/client";
import { getEvents } from "network/events/getEvents";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import PageInformation from "styled/components/shared/page-info/PageInformation";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const ManagementMain = () => {
  const currentDate = useSelector((state: RootState) => state.calendar.date);
  const [, setEvents] = useState<null | Event[]>();
  const [] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, [currentDate]);

  const fetchEvents = async () => {
    try {
      const data = await getEvents({ date: currentDate });
      setEvents(data.events);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SS.ContentWrapper>
      <SS.ContentContainer>
        <PageInformation
          shouldCenterOnMobile={true}
          header={"Upcoming events"}
          paragraph={
            "View all of your events and make sure you participate in them in time. Also manage them and modify as you design."
          }
        />
      </SS.ContentContainer>
    </SS.ContentWrapper>
  );
};

export default ManagementMain;
