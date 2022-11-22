import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
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
`;

export const Group = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1.5em 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: inherit;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${hexToRgba(Colors.DarkGrayColor, 0.15)};
  }
`;

export const GroupsItem = styled.div`
  width: 25%;
  margin-right: 1em;
  font-size: 0.8em;
  text-align: left;
`;

export const Button = styled.button`
  width: 20%;
  margin: 0;
  padding: 0.3rem 1.5rem;
  text-align: center;
  border: 1px solid ${Colors.RedColor};
  border-radius: 4px;
  background-color: ${hexToRgba(Colors.RedColor, 0.25)};
  font-size: 0.7em;
  color: ${Colors.RedColor};
  transition: background-color 0.2s linear;

  &:hover,
  &:focus {
    padding: 0.3rem 1.5rem;
    font-size: 0.7em;
    border: 1px solid ${Colors.RedColor};
    background-color: ${hexToRgba(Colors.RedColor, 0.35)};
    color: ${Colors.RedColor};
  }

  &:focus {
    background-color: ${hexToRgba(Colors.RedColor, 0.3)};
  }

  &:disabled {
    background-color: ${hexToRgba(Colors.RedColor, 0.15)};
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
