import { StyledLogo } from "styled/elements/shared/logo/Logo";
import { goToLink } from "utils/NavigationUtilities";
import Logo from "assets/Logo.svg";
import { LinksContent } from "./LinksContent";
import * as S from "./NavigationPanel.styled";

const NavigationPanel = () => {
  return (
    <S.SectionWrapper>
      <S.ContentWrapper>
        <S.LogoContainer>
          <S.LogoWrapper onClick={() => goToLink({ link: "/" })}>
            <StyledLogo src={Logo} alt="Logo" />
            <S.LogoContent>Listic</S.LogoContent>
          </S.LogoWrapper>
        </S.LogoContainer>
        <S.CreationButtonWrapper>
          <S.Link onClick={() => goToLink({ link: LinksContent[0].url })}>
            <S.LinkIcon src={LinksContent[0].src} alt={LinksContent[0].alt} />
            <S.LinkParagraph>{LinksContent[0].paragraph}</S.LinkParagraph>
          </S.Link>
        </S.CreationButtonWrapper>
        <S.LinksWrapper>
          {LinksContent.slice(1).map((element, index) => (
            <S.Link key={index} onClick={() => goToLink({ link: element.url })}>
              <S.LinkIcon src={element.src} alt={element.alt} />
              <S.LinkParagraph>{element.paragraph}</S.LinkParagraph>
            </S.Link>
          ))}
        </S.LinksWrapper>
      </S.ContentWrapper>
      <S.AuthorizationWrapper>
        <S.UserInformation>
          Loggd in as <S.UserEmail>email@gmail.com</S.UserEmail>
        </S.UserInformation>
        <S.LogoutButton>Logout</S.LogoutButton>
      </S.AuthorizationWrapper>
    </S.SectionWrapper>
  );
};

export default NavigationPanel;
