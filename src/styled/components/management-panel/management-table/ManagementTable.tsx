import { getDate, getTime } from "utils/DateUtilities";
import { EventsType } from "../useManagement";
import * as SS from "./ManagementTable.styled";

type Props = {
  events: EventsType;
};

export const ManagementTable = ({ events }: Props) => {
  return (
    <SS.TableWrapper>
      <thead>
        <SS.ColumnNamesRow>
          <SS.ColumnName width={"15%"}>Name</SS.ColumnName>
          <SS.ColumnName>Start date</SS.ColumnName>
          <SS.ColumnName hideOnMobile>End date</SS.ColumnName>
          <SS.ColumnName>Start time</SS.ColumnName>
          <SS.ColumnName>End time</SS.ColumnName>
          <SS.ColumnName>Status</SS.ColumnName>
        </SS.ColumnNamesRow>
      </thead>
      <tbody>
        {events.map(event => (
          <SS.TableItem key={event.id}>
            <SS.TableRow width={"15%"}>{event.name}</SS.TableRow>
            <SS.TableRow>{getDate(event.startDate)}</SS.TableRow>
            <SS.TableRow hideOnMobile>{getDate(event.endDate)}</SS.TableRow>
            <SS.TableRow>{getTime(event.startDate)}</SS.TableRow>
            <SS.TableRow>{getTime(event.endDate)}</SS.TableRow>
            <SS.TableRow width={"15%"}>
              <SS.StatusIndicator status={event.status.toLowerCase()}>{event.status}</SS.StatusIndicator>
            </SS.TableRow>
            <SS.Button type="button" onClick={() => console.log("remove")}>
              Remove
            </SS.Button>
          </SS.TableItem>
        ))}
      </tbody>
    </SS.TableWrapper>
  );
};
