import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "styled/base/Colors";

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
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: ${hexToRgba(Colors.DarkGrayColor, 0.15)};
`;

export const GroupsColumnNamesItem = styled.span`
  width: 30%;
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
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${hexToRgba(Colors.DarkGrayColor, 0.15)};
  }
`;

export const GroupsItem = styled.div`
  font-size: 0.8em;
  text-align: left;
  width: 30%;
`;
