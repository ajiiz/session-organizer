import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import { Colors } from "styled/base/Colors";
import { goToLink } from "utils/NavigationUtilities";
import Navbar from "styled/components/navbar/Navbar";
import Footer from "styled/components/footer/Footer";
import Button from "styled/components/shared/button/Button";
import HeroImage from "assets/Hero-Image.svg";
import { StyledImage } from "styled/elements/shared/StyledImage";
import * as S from "./Landing.styled";

const Landing = () => {
  return (
    <Wrapper flexDirection="column" height="100vh" alignItems="flex-start" justifyContent="flex-start">
      <Navbar hideRegisterButtonOnMobile={true} />
      <S.HeroWrapper>
        <S.HeroContent>
          <S.HeaderWrapper>
            <S.Header>One workspace.</S.Header>
            <S.Header>For every exam.</S.Header>
          </S.HeaderWrapper>
          <S.Paragraph>
            More than a callendar or a paper. Process every important exam in one provided by Listic place.
          </S.Paragraph>
          <Button
            fontColor={Colors.WhiteColor}
            backgroundColor={Colors.GreenColor}
            backgroundOpacity="0.8"
            hoverColor={Colors.GreenColor}
            hoverOpacity="1"
            padding="0.65rem 3rem"
            onClick={() => goToLink({ link: "/signup" })}
          >
            Register now
          </Button>
        </S.HeroContent>
        <S.ImageWrapper width="40%" height="75%">
          <StyledImage src={HeroImage} alt="Hero" placeholder="blur" blurDataURL={HeroImage} alignSelf={"center"} />
        </S.ImageWrapper>
      </S.HeroWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Landing;
