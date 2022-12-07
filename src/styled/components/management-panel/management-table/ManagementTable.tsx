import { getDate, getTime } from "utils/DateUtilities";
import { EventsType } from "../useManagement";
import * as SS from "./ManagementTable.styled";

type Props = {
  events: EventsType;
};

export const ManagementTable = ({ events }: Props) => {
  return (
    <SS.TableWrapper>
      <SS.GroupsColumnNames>
        <SS.GroupsColumnNamesItem>Name</SS.GroupsColumnNamesItem>
        <SS.GroupsColumnNamesItem>Start date</SS.GroupsColumnNamesItem>
        <SS.GroupsColumnNamesItem>End date</SS.GroupsColumnNamesItem>
        <SS.GroupsColumnNamesItem>Start time</SS.GroupsColumnNamesItem>
        <SS.GroupsColumnNamesItem>End time</SS.GroupsColumnNamesItem>
        <SS.GroupsColumnNamesItem>Status</SS.GroupsColumnNamesItem>
      </SS.GroupsColumnNames>
      {events.map(event => (
        <SS.Group key={event.id}>
          <SS.GroupsItem>{event.name}</SS.GroupsItem>
          <SS.GroupsItem centerOnMobile>{getDate(event.startDate)}</SS.GroupsItem>
          <SS.GroupsItem centerOnMobile>{getDate(event.endDate)}</SS.GroupsItem>
          <SS.GroupsItem centerOnMobile>{getTime(event.startDate)}</SS.GroupsItem>
          <SS.GroupsItem centerOnMobile>{getTime(event.endDate)}</SS.GroupsItem>
          <SS.Button type="button" onClick={() => console.log("remove")} variant={"modify"}>
            Modify
          </SS.Button>
          <SS.Button type="button" onClick={() => console.log("remove")}>
            Remove
          </SS.Button>
        </SS.Group>
      ))}
    </SS.TableWrapper>
  );
};
