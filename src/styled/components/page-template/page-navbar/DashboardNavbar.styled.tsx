import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const Wrapper = styled.div`
  height: 12vh;
  width: 100%;
  padding: 0 15%;
  display: none;
  flex-direction: row;
  justify-content: space-between;

  ${device.smalldesktop} {
    padding: 0 5%;
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LogoContent = styled.h3`
  margin-left: 0.5em;
  font-family: InterMedium;
  font-size: 1em;
  line-height: 1.4rem;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1em;

  ${device.mobile} {
    font-size: 0.9em;
  }
`;

interface RegisterButtonWrapperProps {
  shouldHide?: boolean;
}

export const RegisterButtonWrapper = styled.div<RegisterButtonWrapperProps>`
  ${device.mobile} {
    font-size: 0.7em;
    display: ${({ shouldHide }) => (shouldHide ? "none" : "")};
  }
`;
