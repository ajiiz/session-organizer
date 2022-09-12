import Logo from "assets/Logo.svg";
import { StyledLogo } from "styled/elements/shared/logo/Logo";
import { goToLink } from "utils/NavigationUtilities";
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
          <S.LinkIcon />
          <S.LinkParagraph></S.LinkParagraph>
        </S.CreationButtonWrapper>
        <S.LinksWrapper>
          <S.Link>
            <S.LinkIcon />
            <S.LinkParagraph></S.LinkParagraph>
          </S.Link>
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
