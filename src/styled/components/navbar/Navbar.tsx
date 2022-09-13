import { StyledLogo } from "styled/elements/shared/logo/Logo";
import { Colors } from "styled/base/Colors";
import { goToLink } from "utils/NavigationUtilities";
import Button from "styled/components/shared/button/Button";
import Logo from "assets/Logo.svg";
import * as S from "./Navbar.styled";

interface Props {
  removeLoginButton?: boolean;
  removeRegisterButton?: boolean;
  hideRegisterButtonOnMobile?: boolean;
}

const Navbar = ({ removeLoginButton, removeRegisterButton, hideRegisterButtonOnMobile }: Props) => {
  return (
    <S.Wrapper>
      <S.LogoWrapper onClick={() => goToLink({ link: "/" })}>
        <StyledLogo src={Logo} alt="Logo" />
        <S.LogoContent>Listic</S.LogoContent>
      </S.LogoWrapper>
      <S.ButtonsWrapper>
        {!removeLoginButton && (
          <Button
            backgroundColor=""
            backgroundOpacity="1"
            hoverColor={Colors.GrayColor}
            hoverOpacity="0.1"
            onClick={() => goToLink({ link: "/signin" })}
          >
            Log in
          </Button>
        )}
        {!removeRegisterButton && (
          <S.RegisterButtonWrapper shouldHide={hideRegisterButtonOnMobile}>
            <Button
              fontColor={Colors.WhiteColor}
              backgroundColor={Colors.GreenColor}
              backgroundOpacity="0.8"
              hoverColor={Colors.GreenColor}
              hoverOpacity="1"
              onClick={() => goToLink({ link: "/signup" })}
            >
              Register now
            </Button>
          </S.RegisterButtonWrapper>
        )}
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};

export default Navbar;
