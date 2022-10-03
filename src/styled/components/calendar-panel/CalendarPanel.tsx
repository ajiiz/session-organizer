import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import CloseIcon from "assets/icons/navigation-panel/close-icon.svg";
import * as S from "./CalendarPanel.styled";

interface Props {
  isOpen: boolean;
  handleOpen: (state: boolean) => void;
}

const NavigationPanel = ({ isOpen, handleOpen }: Props) => {
  const [calendarValue, onCalendarValueChange] = useState(new Date());

  useEffect(() => {
    console.log(calendarValue);
  }, [calendarValue]);

  return (
    <S.SectionWrapper isOpen={isOpen}>
      <S.CloseIcon>
        <S.Icon src={CloseIcon} alt="Close icon" onClick={() => handleOpen(false)} />
      </S.CloseIcon>
      <S.CallendarWrapper>
        <Calendar onChange={onCalendarValueChange} value={calendarValue} />
      </S.CallendarWrapper>
    </S.SectionWrapper>
  );
};

export default NavigationPanel;
