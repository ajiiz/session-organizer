import styled from "styled-components";
import { Property } from "csstype";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";
import hexToRgba from "hex-to-rgba";

export const InputsWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${device.tablet} {
    flex-direction: column;
  }
`;

type InputsContainerProps = {
  margin?: Property.Margin;
  isSmall?: boolean;
};

export const InputsContainer = styled.div<InputsContainerProps>`
  width: ${props => (props.isSmall ? "15%" : "30%")};
  margin: ${props => props.margin ?? "0"};
  display: flex;
  flex-direction: column;

  ${device.desktop} {
    width: ${props => (props.isSmall ? "25%" : "40%")};
  }

  ${device.tablet} {
    width: 100%;
    flex-direction: ${props => (props.isSmall ? "row" : "column")};
    justify-content: space-between;
    align-items: center;
  }
`;

type InputContainerProps = {
  margin?: Property.Margin;
  isSmall?: boolean;
};

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  margin: ${props => props.margin ?? "0"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${device.tablet} {
    width: ${props => (props.isSmall ? "48%" : "100%")};
    margin: 0;
  }
`;

interface InputProps {
  margin?: Property.Margin;
  isValid?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  margin: ${props => (props.margin ? props.margin : "0.4rem 0 0 0")};
  padding: 0.7em 0 0.7em 1em;
  display: flex;
  border: ${props => (props.isValid ? `1px solid ${Colors.LightBlackColor}` : `1px solid ${Colors.RedColor}`)};
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

  &:disabled {
    color: ${Colors.LightGrayColor};
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

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
  width: 20rem;
  margin-top: 2.5rem;
  padding: 0.5rem 1.5rem;
  text-align: center;
  border: 1px solid ${Colors.BlueColor};
  border-radius: 4px;
  background-color: ${hexToRgba(Colors.BlueColor, 0.25)};
  font-size: 0.8em;
  color: ${Colors.BlueColor};
  transition: background-color 0.2s linear;

  &:hover,
  &:focus {
    padding: 0.5rem 1.5rem;
    font-size: 0.8em;
    border: 1px solid ${Colors.GreenColor};
    background-color: ${hexToRgba(Colors.BlueColor, 0.35)};
    color: ${Colors.BlueColor};
  }

  &:focus {
    background-color: ${hexToRgba(Colors.BlueColor, 0.3)};
  }

  &:disabled {
    background-color: ${hexToRgba(Colors.BlueColor, 0.15)};
    border: 1px solid ${Colors.LightGrayColor};
    color: ${Colors.LightGrayColor};
    pointer-events: none;
    user-select: none;
  }

  ${device.tablet} {
    width: 100%;
    margin-bottom: 2.5rem;
  }
`;
