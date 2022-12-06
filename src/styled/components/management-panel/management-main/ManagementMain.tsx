import { useEffect, useState } from "react";
import { Event } from "@prisma/client";
import { getEvents } from "network/events/getEvents";
import PageInformation from "styled/components/shared/page-info/PageInformation";
import { useManagement } from "../useManagement";
import * as SS from "styled/components/shared/page-wrapper/PageWrapper.styled";

const ManagementMain = () => {
  const [, setEvents] = useState<null | Event[]>();

  const { selectedOption, options, handleOptionChange, isLoading, events } = useManagement();

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
