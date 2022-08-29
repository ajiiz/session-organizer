import hexToRgba from "hex-to-rgba";
import styled, { css } from "styled-components";
import { Colors } from "styled/base/Colors";

export interface StyledButtonProps {
  backgroundColor: string & {};
  backgroundOpacity: string;
  fontColor?: string & {};
  hoverColor: string & {};
  hoverOpacity: string;
  focusColor?: string & {};
  focusOpacity?: string;
  padding?: string;
}

const SharedButtonStyles = css`
  padding: 0.4rem 1.5rem;
  font-size: 0.9em;
  font-family: InterMedium;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 4px;

  &:hover,
  &:focus {
    font-family: InterMedium;
    padding: 0.4rem 1.5rem;
    font-size: 0.9em;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${SharedButtonStyles};
  background: ${({ backgroundColor, backgroundOpacity }) => hexToRgba(backgroundColor, backgroundOpacity)};
  color: ${({ fontColor }) => (fontColor ? fontColor : Colors.BlackColor)};

  &:hover {
    background: ${({ hoverColor, hoverOpacity }) => hexToRgba(hoverColor, hoverOpacity)};
    color: ${({ fontColor }) => (fontColor ? fontColor : Colors.BlackColor)};
  }

  &:focus {
    background: ${({ hoverColor, hoverOpacity, focusColor, focusOpacity }) =>
      focusColor && focusOpacity ? hexToRgba(focusColor, focusOpacity) : hexToRgba(hoverColor, hoverOpacity)};
    color: ${({ fontColor }) => (fontColor ? fontColor : Colors.BlackColor)};
  }
`;
