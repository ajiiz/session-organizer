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

  ${device.mobile} {
    padding: 1rem 2.5rem 0 2.5rem;
    height: fit-content;
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

export const Button = styled.button`
  width: 35%;
  margin: 2.5rem 0;
  padding: 0.4rem 1.5rem;
  text-align: center;
  border: 1px solid ${Colors.BlueColor};
  border-radius: 4px;
  background: ${hexToRgba(Colors.BlueColor, 0.25)};
  font-size: 0.9em;
  color: ${Colors.BlueColor};
  transition: 0.2s background linear;

  &:hover {
    padding: 0.4rem 1.5rem;
    font-size: 0.9em;
    border: 1px solid ${Colors.BlueColor};
    background: ${hexToRgba(Colors.BlueColor, 0.3)};
    color: ${Colors.BlueColor};
  }

  &:focus {
    padding: 0.4rem 1.5rem;
    font-size: 0.9em;
    border: 1px solid ${Colors.BlueColor};
    background: ${hexToRgba(Colors.BlueColor, 0.25)};
    color: ${Colors.BlueColor};
  }

  ${device.tablet} {
    width: 50%;
  }

  ${device.mobile} {
    width: 75%;
  }
`;
