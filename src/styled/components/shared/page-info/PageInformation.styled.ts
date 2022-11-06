import styled from "styled-components";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

interface TextWrapperProps {
  shouldCenterOnMobile?: boolean;
}

export const TextWrapper = styled.div<TextWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  ${device.tablet} {
    text-align: ${props => (props.shouldCenterOnMobile ? "center" : null)};
  }
`;

export const Header = styled.h1`
  margin: 0;
  font-family: InterSemiBold;
  font-size: 2.8em;
`;

export const Paragraph = styled.p`
  width: 60%;
  margin: 1.5rem 0 0 0.3rem;
  font-size: 0.9em;
  letter-spacing: 0.05em;
  color: ${Colors.LightGrayColor};

  ${device.mobile} {
    width: 80%;
  }
`;
