import styled from "styled-components";
import { Property } from "csstype";

interface WrapperProps {
  display?: Property.Display;
  width?: Property.Width;
  height?: Property.Height;
  flexDirection?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  margin?: Property.Margin;
  padding?: Property.Padding;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  margin: ${({ margin }) => (margin ? margin : "0 0 0 0")};
  padding: ${({ padding }) => (padding ? padding : "0 0 0 0")};
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : "row")};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "center")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  overflow: auto;
`;
