import Image from "next/image";
import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

interface SectionWrapperProps {
  isOpen: boolean;
}

export const SectionWrapper = styled.section<SectionWrapperProps>`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 30rem;
  height: 100%;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  background-color: ${hexToRgba(Colors.DarkWhiteColor, 0.5)};
  border-right: 0.5px solid ${hexToRgba(Colors.DarkGrayColor, 0.5)};
  color: ${Colors.BlackColor};
  z-index: 10;
  transition: 0.2s transform linear;

  ${device.smalldesktop} {
    position: fixed;
    right: 0;
    width: 25rem;
    background-color: ${hexToRgba(Colors.DarkWhiteColor, 1)};
    transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(25rem)")};
  }

  ${device.tablet} {
    position: fixed;
    width: 100%;
    transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(100%)")};
  }

  ${device.mobile} {
    position: fixed;
    padding-top: 5rem;
  }
`;

export const CallendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CloseIcon = styled.div`
  display: none;
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 5;
  cursor: pointer;

  ${device.smalldesktop} {
    display: block;
  }
`;

export const Icon = styled(Image)``;
