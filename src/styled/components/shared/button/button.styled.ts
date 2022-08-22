import hexToRgba from "hex-to-rgba";
import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: string & {};
  fontColor: string & {};
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 0.2em 1em;
  font-size: 0.9em;
  font-family: InterMedium;
  line-height: 1.4em;
  display: flex;
  align-items: center;
  text-align: center;
  background: ${({ backgroundColor }) => (backgroundColor ? hexToRgba(backgroundColor, "0.7") : "none")};
  border-radius: 4px;
  color: ${({ fontColor }) => fontColor};

  &:hover {
    font-family: InterMedium;
    background: ${({ backgroundColor }) => (backgroundColor ? hexToRgba(backgroundColor, "0.7") : "none")};
    color: ${({ fontColor }) => fontColor};
    font-size: 0.9em;
    padding: 0.2em 1em;
  }

  &:focus {
    background: ${({ backgroundColor }) => (backgroundColor ? hexToRgba(backgroundColor, "0.7") : "none")};
    color: ${({ fontColor }) => fontColor};
    font-size: 0.9em;
    padding: 0.2em 1em;
  }
`;
