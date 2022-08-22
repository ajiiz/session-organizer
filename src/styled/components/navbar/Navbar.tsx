import { StyledLogo } from "styled/elements/shared/logo/Logo";
import Logo from "assets/Logo.svg";

import * as S from "./navbar.styled";
import Button from "../shared/button/Button";
import { Colors } from "styled/base/Colors";

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <StyledLogo src={Logo} />
        <S.LogoContent>Listic</S.LogoContent>
      </S.LogoWrapper>
      <S.ButtonsWrapper>
        <Button fontColor={Colors.BlackColor}>Log in</Button>
        <Button fontColor={Colors.WhiteColor} backgroundColor={Colors.GreenColor}>
          Register now
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};

export default Navbar;
