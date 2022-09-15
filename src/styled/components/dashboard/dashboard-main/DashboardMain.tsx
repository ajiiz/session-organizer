import * as S from "./DashboardMain.styled";

const DashboardMain = () => {
  return (
    <S.ContentWrapper>
      <S.TextWrapper>
        <S.Header>Your todays upcoming events</S.Header>
        <S.Paragraph>View your future events and filter them by date.</S.Paragraph>
      </S.TextWrapper>
    </S.ContentWrapper>
  );
};

export default DashboardMain;
