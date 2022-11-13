import styled from "styled-components";
import { Colors } from "styled/base/Colors";
import hexToRgba from "hex-to-rgba";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownBox = styled.div`
  width: 100%;
  margin: 0.4rem 0 0 0;
  padding: 0.4em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.LightBlackColor};
  border-radius: 4px;
  background: ${Colors.DarkWhiteColor};
  color: ${Colors.BlackColor};
  font-size: 0.8em;
  transition: 0.2s border linear;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid ${Colors.GreenColor};
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 120%;
  left: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${hexToRgba(Colors.BlackColor, 0.4)};
  border-radius: 4px;
  background: ${Colors.DarkWhiteColor};
  color: ${Colors.BlackColor};
  font-size: 0.8em;
  user-select: none;
  z-index: 99;
`;

export const DropdownOption = styled.div`
  width: 100%;
  padding: 0.6em 1em;
  border-bottom: 1px solid ${hexToRgba(Colors.BlackColor, 0.4)};
  cursor: pointer;

  &:hover {
    background: ${hexToRgba(Colors.LightGrayColor, 0.05)};
  }

  &:last-child {
    border-bottom: none;
  }
`;
