import styled from "styled-components";
import hexToRgba from "hex-to-rgba";
import { Colors } from "styled/base/Colors";
import Image from "next/image";

export const SectionWrapper = styled.section`
  width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${hexToRgba(Colors.DarkWhiteColor, 0.5)};
  border-right: 0.5px solid ${hexToRgba(Colors.DarkGrayColor, 0.5)};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 1rem 0;
  margin-left: 0.5rem;
  display: flex;
`;

export const LinksWrapper = styled.div``;

export const Link = styled.div`
  width: 75%;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

export const LinkParagraph = styled.span``;

export const LinkIcon = styled(Image)``;

export const AuthorizationWrapper = styled.div``;

export const UserInformation = styled.p``;

export const UserEmail = styled.span``;

export const LogoutButton = styled.button``;
