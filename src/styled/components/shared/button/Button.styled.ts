import hexToRgba from "hex-to-rgba";
import styled, { css } from "styled-components";
import { Colors } from "styled/base/Colors";
import { Property } from "csstype";

export interface StyledButtonProps {
  backgroundColor: Property.BackgroundColor;
  backgroundOpacity: Property.Opacity;
  fontColor?: Property.Color;
  hoverColor: Property.Color;
  hoverOpacity: Property.Opacity;
  focusColor?: Property.Color;
  focusOpacity?: Property.Opacity;
  padding?: Property.Padding;
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
    font-size: 0.9em;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${SharedButtonStyles};
  background: ${({ backgroundColor, backgroundOpacity }) => hexToRgba(backgroundColor, backgroundOpacity)};
  color: ${({ fontColor }) => (fontColor ? fontColor : Colors.BlackColor)};
  padding: ${({ padding }) => (padding ? padding : "0.4rem 1.5rem")};

  &:hover {
    background: ${({ hoverColor, hoverOpacity }) => hexToRgba(hoverColor, hoverOpacity)};
    color: ${({ fontColor }) => (fontColor ? fontColor : Colors.BlackColor)};
    padding: ${({ padding }) => (padding ? padding : "0.4rem 1.5rem")};
  }

  &:focus {
    background: ${({ hoverColor, hoverOpacity, focusColor, focusOpacity }) =>
      focusColor && focusOpacity ? hexToRgba(focusColor, focusOpacity) : hexToRgba(hoverColor, hoverOpacity)};
    color: ${({ fontColor }) => (fontColor ? fontColor : Colors.BlackColor)};
    padding: ${({ padding }) => (padding ? padding : "0.4rem 1.5rem")};
  }
`;
