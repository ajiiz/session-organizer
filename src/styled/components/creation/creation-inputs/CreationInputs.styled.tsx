import styled from "styled-components";
import { Property } from "csstype";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const InputsWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

type InputsContainerProps = {
  margin?: Property.Margin;
};

export const InputsContainer = styled.div<InputsContainerProps>`
  margin: ${props => props.margin ?? "0"};
  display: flex;
  flex-direction: column;
`;

type InputContainerProps = {
  margin?: Property.Margin;
  isSmall?: boolean;
};

export const InputContainer = styled.div<InputContainerProps>`
  width: ${props => (props.isSmall ? "10rem" : "20rem")};
  margin: ${props => props.margin ?? "0"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${device.mobile} {
    width: ${props => (props.isSmall ? "45%" : "100%")};
  }
`;

interface InputProps {
  margin?: Property.Margin;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  margin: ${props => (props.margin ? props.margin : "0.4rem 0 0 0")};
  padding: 0.7em 0 0.7em 1em;
  display: flex;
  border: 1px solid ${Colors.LightBlackColor};
  border-radius: 4px;
  background: ${Colors.DarkWhiteColor};
  color: ${Colors.BlackColor};
  font-size: 0.8em;
  transition: 0.2s border linear;

  &::placeholder {
    color: ${Colors.LightGrayColor};
  }

  &:focus,
  &:hover {
    border: 1px solid ${Colors.GreenColor};
  }
`;

export const InputLabel = styled.label`
  width: 100%;
  margin: 0.8em 0 0 0.1em;
  text-transform: capitalize;
  user-select: none;
  font-size: 0.8em;
  color: ${Colors.LightGrayColor};
`;
