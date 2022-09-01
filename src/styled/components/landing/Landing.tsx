import * as S from "./Landing.styled";
import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import Navbar from "styled/components/navbar/Navbar";
import Footer from "styled/components/footer/Footer";
import Button from "styled/components/shared/button/Button";
import { Colors } from "styled/base/Colors";
import HeroImage from "assets/Hero-Image.svg";

const Landing = () => {
  return (
    <Wrapper flexDirection="column" height="100vh" alignItems="flex-start" justifyContent="flex-start">
      <Navbar />
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
          >
            Register now
          </Button>
        </S.HeroContent>
        <S.ImageWrapper width="50%" height="75%">
          <S.HeroImage src={HeroImage} alt="Hero" placeholder="blur" blurDataURL={HeroImage} />
        </S.ImageWrapper>
      </S.HeroWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Landing;
