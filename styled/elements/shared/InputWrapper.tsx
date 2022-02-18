import styled from "styled-components";
import { Property } from "csstype";

interface InputWrapperProps {
  marginBottom?: Property.MarginBottom;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "1em")};
`;
