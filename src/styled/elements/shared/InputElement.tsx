import styled from "styled-components";
import { Property } from "csstype";
import { LightGrayColor } from "src/styled/base/Colors";

interface InputElementProps {
  width?: Property.Width;
  padding?: Property.Padding;
}

export const InputElement = styled.input<InputElementProps>`
  width: ${props => (props.width ? props.width : "100%")};
  padding: ${props => (props.padding ? props.padding : "0.5em 0.2em")};
  font-size: 0.8em;
  border: 1px solid ${LightGrayColor};

  &:hover {
    border: 1px solid ${LightGrayColor};
  }

  &:focus {
    border: 1px solid ${LightGrayColor};
  }
`;
