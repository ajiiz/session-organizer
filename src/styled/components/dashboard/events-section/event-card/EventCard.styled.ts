import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const EventCard = styled.div`
  width: 80%;
  padding: 1rem;
  display: flex;
  margin: 0.5rem 0;
  flex-direction: column;
  background: ${hexToRgba(Colors.DarkGrayColor, 0.1)};

  ${device.tablet} {
    width: 100%;
  }
`;

export const EventHeader = styled.h3`
  margin: 0;
  font-family: InterSemiBold;
  font-size: 1.4em;
`;

export const EventParagraph = styled.p`
  margin: 1.2em 0;
  font-family: InterRegular;
  font-size: 0.85em;
  letter-spacing: 0.05em;
  color: ${Colors.LightGrayColor};
`;

export const EventDateTime = styled.div`
  display: flex;
  gap: 3rem;
`;

export const EventTime = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EventTimeName = styled.span`
  margin: 0 0 0.5em 0;
  font-family: InterRegular;
  font-size: 0.85em;
  letter-spacing: 0.05em;
  color: ${Colors.LightGrayColor};
`;

export const EventTimeDetails = styled.span`
  font-family: InterSemiBold;
  font-size: 0.85em;
  color: ${Colors.BlackColor};
`;
