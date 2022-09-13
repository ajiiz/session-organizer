import { StyledLogo } from "styled/elements/shared/logo/Logo";
import { Colors } from "styled/base/Colors";
import Button from "styled/components/shared/button/Button";
import Logo from "assets/Logo.svg";
import * as S from "./DashboardNavbar.styled";

interface Props {
  handleNavigationPanel: (state?: boolean) => void;
  handleCallendarPanel: (state?: boolean) => void;
}

const DashboardNavbar = ({ handleNavigationPanel, handleCallendarPanel }: Props) => {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <StyledLogo src={Logo} alt="Logo" />
      </S.LogoWrapper>
      <S.ButtonsWrapper>
        <Button
          backgroundColor=""
          backgroundOpacity="1"
          hoverColor={Colors.GrayColor}
          hoverOpacity="0.1"
          onClick={() => handleNavigationPanel()}
        >
          Control Panel
        </Button>
        <Button
          backgroundColor=""
          backgroundOpacity="1"
          hoverColor={Colors.GrayColor}
          hoverOpacity="0.1"
          onClick={() => handleCallendarPanel()}
        >
          Callendar
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};

export default DashboardNavbar;
