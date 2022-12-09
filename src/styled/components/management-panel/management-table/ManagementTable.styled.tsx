import { Property } from "csstype";
import hexToRgba from "hex-to-rgba";
import styled, { css } from "styled-components";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";

export const TableWrapper = styled.table`
  width: 100%;
  height: fit-content;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
`;

export const ColumnNamesRow = styled.tr`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  background-color: ${hexToRgba(Colors.DarkGrayColor, 0.15)};

  ${device.mobile} {
    padding: 0.5em 0.3em;
  }
`;

type GroupsColumnNamesItemProps = {
  width?: Property.Width;
  hideOnMobile?: boolean;
};

export const ColumnName = styled.span<GroupsColumnNamesItemProps>`
  width: ${({ width }) => width || "12%"};
  margin-right: 5px;
  font-size: 0.55em;
  font-family: InterRegular;
  letter-spacing: 0.1em;
  color: ${Colors.LightGrayColor};
  text-transform: uppercase;
  user-select: none;
  text-align: left;
  word-break: break-word;

  ${device.mobile} {
    width: 15%;
    display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "block")};
    height: fit-content;
    font-size: 0.5em;
  }
`;

export const TableItem = styled.th`
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
  width?: Property.Width;
  hideOnMobile?: boolean;
};

export const TableRow = styled.tr<GroupItemProps>`
  width: ${({ width }) => width || "12%"};
  margin-right: 6px;
  font-size: 0.7em;
  text-align: left;
  word-break: break-word;

  ${device.mobile} {
    width: 15%;
    display: ${({ hideOnMobile }) => (hideOnMobile ? "none" : "block")};
    height: fit-content;
    font-size: 0.6em;
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

type ButtonProps = {
  variant?: string;
};

export const Button = styled.button<ButtonProps>`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0.3rem 1.5rem;
  text-align: center;
  border-radius: 4px;
  font-size: 0.7em;
  transition: background-color 0.2s linear;
  ${RemoveButtonStyles};

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
    width: 13%;
    padding: 0.1rem 0.5rem;
    font-size: 0.5em;
    margin-left: 5px;

    &:hover,
    &:focus {
      padding: 0.1rem 0.5rem;
      font-size: 0.5em;
    }
  }
`;

type StatusIndicatorProps = {
  status: string;
};

export const StatusIndicator = styled.div<StatusIndicatorProps>`
  width: 80%;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 0.7em;
  font-family: InterBold;
  letter-spacing: 0.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.15rem;
  background-color: ${({ status }) => {
    switch (status) {
      case "inProgress":
        return hexToRgba(Colors.GreenColor, 0.3);
      case "future":
        return hexToRgba(Colors.PurpleColor, 0.3);
      case "requested":
        return hexToRgba(Colors.BlueColor, 0.3);
      default:
        return hexToRgba(Colors.LightGrayColor, 0.3);
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case "inProgress":
        return Colors.GreenColor;
      case "future":
        return Colors.PurpleColor;
      case "requested":
        return Colors.BlueColor;
      default:
        return Colors.LightGrayColor;
    }
  }};

  ${device.mobile} {
    width: 100%;
    font-size: 0.6em;
  }
`;
