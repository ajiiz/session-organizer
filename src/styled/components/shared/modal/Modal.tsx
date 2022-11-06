import CheckIcon from "assets/icons/check-icon.svg";
import { useEffect } from "react";
import { StyledImage } from "styled/elements/shared/StyledImage";
import * as S from "./Modal.styled";

export type ModalType = "success" | "error";

interface Props {
  isOpen: boolean;
  handleModal: (value: boolean) => void;
  text?: string;
  type?: ModalType;
}

const Modal = ({ isOpen, handleModal, text = defaultModalText, type = "success" }: Props) => {
  useEffect(() => {
    if (!isOpen) return;

    const timeout = setTimeout(() => handleModal(false), 3500);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <S.ModalWrapper isOpen={isOpen} onClick={() => handleModal(false)} type={type}>
      <S.ModalContainer>
        <S.ModalText>{text}</S.ModalText>
        <StyledImage src={CheckIcon} alt="check" />
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default Modal;

const defaultModalText = "Your action was successful!";
