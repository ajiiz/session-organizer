import NotFoundImage from "assets/Not-Found-Image.svg";
import * as S from "./EventsNotFound.styled";

const EventsNotFound = () => {
  return (
    <>
      <S.TextWrapper>
        <S.Header>You don’t have any events</S.Header>
        <S.Paragraph>Change the date to the check other days.</S.Paragraph>
      </S.TextWrapper>
      <S.ImageWrapper>
        <S.NotFoundImage src={NotFoundImage} alt="Hero" placeholder="blur" blurDataURL={NotFoundImage} />
      </S.ImageWrapper>
    </>
  );
};

export default EventsNotFound;
