import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

type ContentWrapperProps = {
  customMargin?: boolean;
};

export const ContentWrapper = styled.div<ContentWrapperProps>`
  width: 100%;
  height: 100%;
  padding: 8rem 5rem 0 5rem;
  margin-bottom: ${props => (props.customMargin ? "2.5rem" : null)};

  ${device.smalldesktop} {
    width: 100%;
    padding: 3rem 5rem 0 5rem;
  }

  ${device.tablet} {
    padding: 2.5rem 2.5rem 0 2.5rem;
  }

  ${device.mobile} {
    padding: 1rem 2.5rem 0 2.5rem;
    height: fit-content;
  }
`;

export const EventsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
