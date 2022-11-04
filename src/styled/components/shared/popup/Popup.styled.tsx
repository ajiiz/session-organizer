import styled from "styled-components";

type PopupWrapper = {
  isOpen: boolean;
};

export const PopupWrapper = styled.div<PopupWrapper>`
  position: ${({ isOpen }) => (isOpen ? "fixed" : "none")};
  width: 500px;
  height: 100px;
  bottom: 20px;
  left: 50%;
  margin-top: -100px;
  margin-left: -250px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
