import styled from "styled-components";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 8rem 0 0 5rem;

  ${device.smalldesktop} {
    padding: 3rem 0 0 5rem;
  }

  ${device.tablet} {
    padding: 2.5rem 2.5rem 0 2.5rem;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
