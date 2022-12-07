import hexToRgba from "hex-to-rgba";
import styled, { css } from "styled-components";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const TableWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;

export const GroupsColumnNames = styled.div`
  width: 100%;
  height: 1.8rem;
  padding: 0 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  background-color: ${hexToRgba(Colors.DarkGrayColor, 0.15)};
`;

export const GroupsColumnNamesItem = styled.span`
  width: 25%;
  margin-right: 1em;
  font-size: 0.55em;
  font-family: InterRegular;
  letter-spacing: 0.1em;
  color: ${Colors.LightGrayColor};
  text-transform: uppercase;
  user-select: none;

  ${device.mobile} {
    margin-right: 0;
    font-size: 0.5em;
  }
`;

export const Group = styled.div`
  width: 100%;
  padding: 1.5em 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: inherit;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${hexToRgba(Colors.DarkGrayColor, 0.15)};
  }

  ${device.mobile} {
    padding: 1.5em 0.3em;
  }
`;

type GroupItemProps = {
  centerOnMobile?: boolean;
};

export const GroupsItem = styled.div<GroupItemProps>`
  width: 25%;
  margin-right: 1em;
  font-size: 0.8em;
  text-align: left;
  word-break: break-word;

  ${device.mobile} {
    height: fit-content;
    margin-right: 0;
    font-size: 0.7em;
    text-align: ${({ centerOnMobile }) => (centerOnMobile ? "center" : "left")};
  }
`;

const RemoveButtonStyles = css`
  background-color: ${hexToRgba(Colors.RedColor, 0.25)};
  border: 1px solid ${Colors.RedColor};
  color: ${Colors.RedColor};

  &:hover,
  &:focus {
    border: 1px solid ${Colors.RedColor};
    background-color: ${hexToRgba(Colors.RedColor, 0.35)};
    color: ${Colors.RedColor};
  }

  &:focus {
    background-color: ${hexToRgba(Colors.RedColor, 0.3)};
  }

  &:disabled {
    background-color: ${hexToRgba(Colors.RedColor, 0.15)};
  }
`;

const ModifyButtonStyles = css`
  background-color: ${hexToRgba(Colors.BlueColor, 0.25)};
  border: 1px solid ${Colors.BlueColor};
  color: ${Colors.BlueColor};

  &:hover,
  &:focus {
    border: 1px solid ${Colors.BlueColor};
    background-color: ${hexToRgba(Colors.BlueColor, 0.35)};
    color: ${Colors.BlueColor};
  }

  &:focus {
    background-color: ${hexToRgba(Colors.BlueColor, 0.3)};
  }

  &:disabled {
    background-color: ${hexToRgba(Colors.BlueColor, 0.15)};
  }
`;

type ButtonProps = {
  variant?: string;
};

export const Button = styled.button<ButtonProps>`
  width: 20%;
  margin: 0;
  padding: 0.3rem 1.5rem;
  text-align: center;
  border-radius: 4px;
  font-size: 0.7em;
  transition: background-color 0.2s linear;
  ${({ variant }) => (variant === "modify" ? ModifyButtonStyles : RemoveButtonStyles)}

  &:hover,
  &:focus {
    padding: 0.3rem 1.5rem;
    font-size: 0.7em;
  }

  &:disabled {
    pointer-events: none;
    user-select: none;
    border: 1px solid ${Colors.LightGrayColor};
    color: ${Colors.LightGrayColor};
  }

  ${device.mobile} {
    width: 25%;
    padding: 0.2rem 1rem;
  }
`;
