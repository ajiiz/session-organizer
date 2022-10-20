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
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
  display: ${props => (props.display ? props.display : "flex")};
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : "row")};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : "center")};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  margin: ${props => (props.margin ? props.margin : "0 0 0 0")};
  padding: ${props => (props.padding ? props.padding : "0 0 0 0")};
  overflow: auto;
`;
