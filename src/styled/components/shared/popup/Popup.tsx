import * as S from "./Popup.styled";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const Popup = ({ isOpen, handleClose }: Props) => {
  return (
    <S.PopupWrapper isOpen={isOpen}>
      <p>POPUPMENU</p>
    </S.PopupWrapper>
  );
};

export default Popup;
