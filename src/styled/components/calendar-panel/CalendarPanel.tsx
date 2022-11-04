import Calendar from "react-calendar";
import { RootState } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "redux/dateSlice";
import CloseIcon from "assets/icons/navigation-panel/close-icon.svg";
import * as S from "./CalendarPanel.styled";

interface Props {
  isOpen: boolean;
  handleOpen: (state: boolean) => void;
}

const NavigationPanel = ({ isOpen, handleOpen }: Props) => {
  const currentDate = useSelector((state: RootState) => state.calendar.date);
  const dispatch = useDispatch();

  const handleDateChange = (value: Date) => {
    dispatch(changeDate(value));
  };

  return (
    <S.SectionWrapper isOpen={isOpen}>
      <S.CloseIcon>
        <S.Icon src={CloseIcon} alt="Close icon" onClick={() => handleOpen(false)} />
      </S.CloseIcon>
      <S.CallendarWrapper>
        <Calendar locale="en-EN" onChange={(date: Date) => handleDateChange(date)} value={currentDate} />
      </S.CallendarWrapper>
    </S.SectionWrapper>
  );
};

export default NavigationPanel;
