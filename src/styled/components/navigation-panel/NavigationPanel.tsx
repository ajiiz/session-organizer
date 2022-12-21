import { StyledImage } from "styled/elements/shared/StyledImage";
import { goToLink, isCurrentPath } from "utils/NavigationUtilities";
import Logo from "assets/Logo.svg";
import { LinksContent } from "./LinksContent";
import { signOut, useSession } from "next-auth/react";
import CloseIcon from "assets/icons/navigation-panel/close-icon.svg";
import { useRouter } from "next/router";
import * as S from "./NavigationPanel.styled";

interface Props {
  isOpen: boolean;
  handleOpen: (state: boolean) => void;
}

const NavigationPanel = ({ isOpen, handleOpen }: Props) => {
  const { data } = useSession();
  const router = useRouter();

  const getLinks = (): JSX.Element[] => {
    const userRole = data?.user?.role;
    const filteredLinks = LinksContent.slice(1).filter(link => {
      if (link.url === "/admin-panel" || link.url === "/feed") {
        if (userRole === "administrator" || userRole === "examinator") {
          return true;
        }
        return false;
      }
      return true;
    });

    return filteredLinks.map((element, index) => (
      <S.Link
        key={index}
        onClick={() => goToLink({ link: element.url })}
        isCurrentPath={isCurrentPath({ routerPath: router.pathname, currentPath: element.url })}
      >
        <StyledImage src={element.src} alt={element.alt} width={"34px"} height={"34px"} />
        <S.LinkParagraph>{element.paragraph}</S.LinkParagraph>
      </S.Link>
    ));
  };

  return (
    <S.SectionWrapper isOpen={isOpen}>
      <S.CloseIcon>
        <StyledImage src={CloseIcon} alt="Close icon" onClick={() => handleOpen(false)} />
      </S.CloseIcon>
      <S.ContentWrapper>
        <S.LogoContainer>
          <S.LogoWrapper onClick={() => goToLink({ link: "/" })}>
            <StyledImage src={Logo} alt="Logo" width={"34px"} height={"34px"} priority />
            <S.LogoContent>Listic</S.LogoContent>
          </S.LogoWrapper>
        </S.LogoContainer>
        <S.CreationButtonWrapper>
          <S.Link
            onClick={() => goToLink({ link: LinksContent[0].url })}
            isCurrentPath={isCurrentPath({ routerPath: router.pathname, currentPath: LinksContent[0].url })}
          >
            <StyledImage src={LinksContent[0].src} alt={LinksContent[0].alt} width={"34px"} height={"34px"} />
            <S.LinkParagraph>{LinksContent[0].paragraph}</S.LinkParagraph>
          </S.Link>
        </S.CreationButtonWrapper>
        <S.LinksWrapper>{getLinks()}</S.LinksWrapper>
      </S.ContentWrapper>
      <S.AuthorizationWrapper>
        <S.UserInformation>
          Logged in as <S.UserEmail>{data?.user.email}</S.UserEmail>
        </S.UserInformation>
        <S.LogoutButton type="button" onClick={() => signOut({ callbackUrl: "/signin" })}>
          Logout
        </S.LogoutButton>
      </S.AuthorizationWrapper>
    </S.SectionWrapper>
  );
};

export default NavigationPanel;
