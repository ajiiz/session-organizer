import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const SectionWrapper = styled.section`
  height: 80%;
  width: 100%;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
`;

export const RegisterWrapper = styled(SectionWrapper)`
  ${device.mobile} {
    padding: 2rem 0;
    min-height: 80%;
  }
`;

export const ContentWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-family: InterSemiBold;
  font-size: 4em;
  text-align: center;
  margin: 0 0 2rem 0;
  padding: 0 0 2rem 0;
  border-bottom: 0.5px solid rgba(155, 154, 151, 0.75);
`;

export const Form = styled.form``;

type ButtonProps = {
  margin?: string;
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  margin: ${props => props.margin ?? ""};
  padding: 0.4rem 1.5rem;
  text-align: center;
  border: 1px solid ${Colors.GreenColor};
  border-radius: 4px;
  background: ${hexToRgba(Colors.GreenColor, 0.25)};
  font-size: 0.9em;
  color: ${Colors.GreenColor};
  transition: 0.2s background linear;

  &:hover {
    padding: 0.4rem 1.5rem;
    font-size: 0.9em;
    border: 1px solid ${Colors.GreenColor};
    background: ${hexToRgba(Colors.GreenColor, 0.3)};
    color: ${Colors.GreenColor};
  }

  &:focus {
    padding: 0.4rem 1.5rem;
    font-size: 0.9em;
    border: 1px solid ${Colors.GreenColor};
    background: ${hexToRgba(Colors.GreenColor, 0.25)};
    color: ${Colors.GreenColor};
  }
`;

interface InputProps {
  margin?: string;
  width?: string;
}

export const Input = styled.input<InputProps>`
  width: ${props => (props.width ? props.width : "100%")};
  margin: ${props => (props.margin ? props.margin : "0.4rem 0 0 0")};
  padding: 0.7em 0 0.7em 1em;
  display: flex;
  border: 1px solid ${Colors.LightBlackColor};
  border-radius: 4px;
  background: ${Colors.DarkWhiteColor};
  color: ${Colors.BlackColor}
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

export const NameInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameInputWrapper = styled.div`
  width: 48%;
`;

export const StatusMessage = styled.p`
  margin: 1rem 0;
  text-align: center;
  user-select: none;
  font-size: 0.8em;
  color: ${Colors.LightGrayColor};
`;
