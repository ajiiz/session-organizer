import { EventsType } from "styled/components/management-panel/useManagement";
import { getDate, getTime } from "utils/DateUtilities";
import AcceptIcon from "assets/icons/ring-arrow-green-icon.svg";
import DenyIcon from "assets/icons/ring-cross-red-icon.svg";
import * as SS from "./FeedTable.styled";
import { StyledImage } from "styled/elements/shared/StyledImage";
import { getEventStatus, Status } from "utils/EventUtilities";

type Props = {
  events: EventsType;
  handleRequest: (requestId: string, desiredStatus: Status | "cancelled") => void;
};

export const FeedTable = ({ events, handleRequest }: Props) => {
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
            <SS.TableRow>
              <SS.TableRowImage>
                <StyledImage
                  src={AcceptIcon}
                  alt="accept"
                  onClick={() => handleRequest(event.id, getEventStatus(event.startDate, event.endDate))}
                />
              </SS.TableRowImage>
              <SS.TableRowImage>
                <StyledImage src={DenyIcon} alt="deny" onClick={() => handleRequest(event.id, "cancelled")} />
              </SS.TableRowImage>
            </SS.TableRow>
          </SS.TableItem>
        ))}
      </tbody>
    </SS.TableWrapper>
  );
};
