import GithubIcon from "assets/icons/github-icon.svg";
import LinkedinIcon from "assets/icons/linkedin-icon.svg";
import { StyledImage } from "styled/elements/shared/StyledImage";
import * as S from "./Footer.styled";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Links>
          <S.Link href="https://www.linkedin.com/in/piotrwrobel-ajiiz/" target="_blank">
            <StyledImage src={LinkedinIcon} width={"18px"} height={"18px"} />
          </S.Link>
          <S.Link href="https://github.com/ajiiz" target="_blank">
            <S.LinkIcon src={GithubIcon} width={"18px"} height={"18px"} />
          </S.Link>
          <S.Link href="https://www.piotrwrobel.xyz/">Portfolio</S.Link>
          <S.Link href="mailto: piotrwrobel.ajiiz@gmail.com">Email me</S.Link>
        </S.Links>
        <S.Copyright>&copy;{new Date().getFullYear()} Piotr Wrobel</S.Copyright>
      </S.Content>
    </S.Wrapper>
  );
};

export default Footer;
