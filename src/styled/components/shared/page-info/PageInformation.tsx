import * as S from "./PageInformation.styled";

interface PageInformationProps {
  header: string;
  paragraph: string;
}

const PageInformation = ({ header, paragraph }: PageInformationProps) => {
  return (
    <S.TextWrapper>
      <S.Header>{header}</S.Header>
      <S.Paragraph>{paragraph}</S.Paragraph>
    </S.TextWrapper>
  );
};

export default PageInformation;
