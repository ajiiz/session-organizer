import { Property } from "csstype";
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

interface InputsContainerProps {
  margin?: Property.Margin;
  isSmall?: boolean;
}

export const InputsContainer = styled.div<InputsContainerProps>`
  width: ${({ isSmall }) => (isSmall ? "15%" : "30%")};
  margin: ${({ margin }) => margin ?? "0"};
  display: flex;
  flex-direction: column;

  ${device.desktop} {
    width: ${({ isSmall }) => (isSmall ? "25%" : "40%")};
  }

  ${device.tablet} {
    width: 100%;
    flex-direction: ${({ isSmall }) => (isSmall ? "row" : "column")};
    justify-content: space-between;
    align-items: center;
  }
`;

interface InputContainerProps {
  margin?: Property.Margin;
  isSmall?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  margin: ${({ margin }) => margin ?? "0"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${device.tablet} {
    width: ${({ isSmall }) => (isSmall ? "48%" : "100%")};
    margin: 0;
  }
`;

interface InputProps {
  margin?: Property.Margin;
  isValid?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  margin: ${({ margin }) => (margin ? margin : "0.4rem 0 0 0")};
  padding: 0.7em 0 0.7em 1em;
  display: flex;
  border: ${({ isValid }) => (isValid ? `1px solid ${Colors.LightBlackColor}` : `1px solid ${Colors.RedColor}`)};
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

  &[type="password"] {
    &:disabled {
      color: ${hexToRgba(Colors.LightGrayColor, 0.3)};
    }
  }

  &:disabled {
    color: ${Colors.LightGrayColor};
    border: 1px solid ${Colors.LightBlackColor};
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

type ButtonProps = {
  width?: Property.Width;
  margin?: Property.Margin;
};

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => (width ? width : "20rem")};
  margin: ${({ margin }) => (margin ? margin : "2.5rem 0 0 0")};
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
