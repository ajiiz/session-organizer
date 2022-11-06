import Image from "next/image";
import styled from "styled-components";
import hexToRgba from "hex-to-rgba";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";
import { Property } from "csstype";

interface SectionWrapperProps {
  isOpen: boolean;
}

export const SectionWrapper = styled.section<SectionWrapperProps>`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${hexToRgba(Colors.DarkWhiteColor, 0.5)};
  border-right: 0.5px solid ${hexToRgba(Colors.DarkGrayColor, 0.5)};
  color: ${Colors.BlackColor};
  z-index: 10;
  transition: 0.2s transform linear;

  ${device.smalldesktop} {
    position: fixed;
    width: 25rem;
    background-color: ${hexToRgba(Colors.DarkWhiteColor, 1)};
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-25rem)")};
  }

  ${device.tablet} {
    position: fixed;
    width: 100%;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  }

  ${device.mobile} {
    position: fixed;
  }
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
`;

export const LogoContainer = styled.div`
  width: 85%;
  padding: 3rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid rgba(155, 154, 151, 0.75);
`;

export const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;

export const LogoContent = styled.h3`
  margin-left: 0.5em;
  font-family: InterMedium;
  font-size: 1em;
  line-height: 1.4rem;
  text-align: center;
`;

export const CreationButtonWrapper = styled.div`
  width: 100%;
  padding: 2rem 2rem;
  display: flex;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

interface LinkProps {
  margin?: Property.Margin;
  isCurrentPath?: boolean;
}

export const Link = styled.div<LinkProps>`
  width: 100%;
  padding: 0.2rem 1rem;
  margin: ${({ margin }) => margin ?? ""};
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.2s background-color linear;
  background-color: ${({ isCurrentPath }) => (isCurrentPath ? hexToRgba(Colors.DarkGrayColor, 0.15) : "")};

  &:hover {
    background-color: ${hexToRgba(Colors.DarkGrayColor, 0.15)};
  }
`;

export const LinkParagraph = styled.span`
  margin-left: 1.1rem;
  font-family: InterRegular;
  font-size: 0.9em;
`;

export const AuthorizationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInformation = styled.p`
  text-align: center;
  font-family: InterLight;
  font-size: 0.8em;
`;

export const UserEmail = styled.span`
  font-family: InterRegular;
  color: ${Colors.GreenColor};
  text-decoration: underline;
  text-decoration-color: ${Colors.GreenColor};
  letter-spacing: 0.05em;
`;

export const LogoutButton = styled.button`
  width: 90%;
  margin: 0 auto;
  padding: 0.4rem 1.5rem;
  text-align: center;
  border: 1px solid ${Colors.RedColor};
  border-radius: 4px;
  background-color: ${hexToRgba(Colors.RedColor, 0.25)};
  font-size: 0.9em;
  color: ${Colors.RedColor};
  transition: 0.2s background-color linear;

  &:hover {
    padding: 0.4rem 1.5rem;
    font-size: 0.9em;
    border: 1px solid ${Colors.RedColor};
    background-color: ${hexToRgba(Colors.RedColor, 0.3)};
    color: ${Colors.RedColor};
  }

  &:focus {
    padding: 0.4rem 1.5rem;
    font-size: 0.9em;
    border: 1px solid ${Colors.RedColor};
    background-color: ${hexToRgba(Colors.RedColor, 0.25)};
    color: ${Colors.RedColor};
  }
`;
