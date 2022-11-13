import styled from "styled-components";
import hexToRgba from "hex-to-rgba";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";
import { ModalType } from "./Modal";

interface ModalWrapper {
  isOpen: boolean;
  type: ModalType;
}

export const ModalWrapper = styled.div<ModalWrapper>`
  position: fixed;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  width: 30%;
  height: 50px;
  bottom: 40px;
  left: 50%;
  margin-left: -12.5%;
  border: ${({ type }) => (type === "success" ? `1px solid ${Colors.GreenColor}` : `1px solid ${Colors.RedColor}`)};
  border-radius: 10px;
  background-color: ${({ type }) =>
    type === "success" ? hexToRgba(Colors.GreenColor, 0.25) : hexToRgba(Colors.RedColor, 0.25)};
  color: ${Colors.BlackColor};
  user-select: none;
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
  cursor: pointer;
  z-index: 100;
  transition: opacity 0.3s ease-in-out;

  ${device.smalldesktop} {
    width: 90%;
    height: 38px;
    margin-left: -45%;
  }

  ${device.mobile} {
    width: 80%;
    height: 40px;
    margin-left: -40%;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${device.mobile} {
    padding: 0 1em;
  }
`;

export const ModalText = styled.p`
  font-size: 0.85rem;
  color: ${Colors.BlackColor};
`;
