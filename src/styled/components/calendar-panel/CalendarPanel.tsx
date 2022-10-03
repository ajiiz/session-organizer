import { useEffect, useState } from "react";
import Calendar from "react-calendar";
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
      <S.CallendarWrapper>
        <Calendar onChange={onCalendarValueChange} value={calendarValue} />
      </S.CallendarWrapper>
    </S.SectionWrapper>
  );
};

export default NavigationPanel;
