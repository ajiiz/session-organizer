import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const ContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  padding: 8rem 0 0 5rem;
  transform: translateX(20rem);

  ${device.smalldesktop} {
    width: 100%;
    padding: 3rem 5rem 0 5rem;
    transform: translateX(0);
  }

  ${device.tablet} {
    padding: 2.5rem 2.5rem 0 2.5rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Header = styled.h1`
  margin: 0;
  font-family: InterSemiBold;
  font-size: 2.8em;
`;

export const Paragraph = styled.p`
  margin: 1.5rem 0 0 0.3rem;
  font-size: 0.9em;
  letter-spacing: 0.05em;
  color: ${Colors.LightGrayColor};
`;

export const EventsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EventCard = styled.div`
  width: 80%;
  padding: 1rem;
  display: flex;
  margin: 0.5rem 0;
  flex-direction: column;
  background: ${hexToRgba(Colors.DarkGrayColor, 0.1)};
`;

export const EventHeader = styled.h3`
  margin: 0;
  font-family: InterRegular;
  font-size: 1.4em;
`;

export const EventParagraph = styled.p``;

export const EventDateTime = styled.div`
  display: flex;
`;

export const EventTime = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EventTimeName = styled.span``;

export const EventTimeDetails = styled.span``;
