import { StyledLogo } from "styled/elements/shared/logo/Logo";
import Logo from "assets/Logo.svg";

import * as S from "./Navbar.styled";
import Button from "../shared/button/Button";
import { Colors } from "styled/base/Colors";

interface Props {
  removeButtons?: boolean;
}

const Navbar = ({ removeButtons }: Props) => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <StyledLogo src={Logo} />
        <S.LogoContent>Listic</S.LogoContent>
      </S.LogoWrapper>
      {!removeButtons && (
        <S.ButtonsWrapper>
          <Button backgroundColor="" backgroundOpacity="1" hoverColor={Colors.GrayColor} hoverOpacity="0.1">
            Log in
          </Button>
          <S.RegisterButtonWrapper>
            <Button
              fontColor={Colors.WhiteColor}
              backgroundColor={Colors.GreenColor}
              backgroundOpacity="0.8"
              hoverColor={Colors.GreenColor}
              hoverOpacity="1"
            >
              Register now
            </Button>
          </S.RegisterButtonWrapper>
        </S.ButtonsWrapper>
      )}
    </S.Wrapper>
  );
};

export default Navbar;
