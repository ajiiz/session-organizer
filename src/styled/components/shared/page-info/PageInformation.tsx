import * as S from "./PageInformation.styled";

interface PageInformationProps {
  header: string;
  paragraph: string;
  shouldCenterOnMobile?: boolean;
}

const PageInformation = ({ header, paragraph, shouldCenterOnMobile }: PageInformationProps) => {
  return (
    <S.TextWrapper shouldCenterOnMobile={shouldCenterOnMobile}>
      <S.Header>{header}</S.Header>
      <S.Paragraph>{paragraph}</S.Paragraph>
    </S.TextWrapper>
  );
};

export default PageInformation;
