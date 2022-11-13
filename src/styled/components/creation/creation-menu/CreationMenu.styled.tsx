import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const OptionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 0.5px solid ${hexToRgba(Colors.DarkGrayColor, 0.5)};
  color: ${Colors.BlackColor};
`;

interface OptionProps {
  isSelected: boolean;
}

export const Option = styled.button<OptionProps>`
  width: 25%;
  text-transform: capitalize;
  padding: 0.8rem 0;
  color: ${({ isSelected }) => (isSelected ? Colors.GreenColor : Colors.BlackColor)};
  box-shadow: ${({ isSelected }) => (isSelected ? `0 2px 0 -0.5px ${hexToRgba(Colors.GreenColor, 1)}` : null)};
  transition: color 150ms linear, box-shadow 150ms linear;

  &:focus,
  &:hover {
    color: ${Colors.GreenColor};
    padding: 0.8rem 0;
  }

  ${device.tablet} {
    box-shadow: ${({ isSelected }) => (isSelected ? `0 2px 0 -0.5px ${hexToRgba(Colors.GreenColor, 1)}` : null)};
  }

  ${device.mobile} {
    height: 4.5em;
  }
`;
