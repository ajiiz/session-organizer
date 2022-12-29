import hexToRgba from "hex-to-rgba";
import styled from "styled-components";
import { Colors } from "styled/base/Colors";

export const ToDoListWrapper = styled.div`
  width: 100%;
  padding: 2.2rem;
`;

export const ToDoListHeader = styled.h1`
  font-size: 1.1em;
  margin-bottom: 1em;
  text-transform: uppercase;
`;

export const ToDoListInput = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0 1em;
  background-color: inherit;
  border: 1px solid ${hexToRgba(Colors.DarkGrayColor, 0.15)};
  border-radius: 4px;

  &:hover,
  &:focus {
    border: 1px solid ${hexToRgba(Colors.DarkGrayColor, 0.15)};
    border-radius: 4px;
  }
`;

export const TaskList = styled.ul`
  padding: 0;
`;

export const TaskItemWrapper = styled.li`
  margin-top: 0.2em;
  padding: 0 0 0 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const TaskItem = styled.div`
  width: 90%;
  margin: 0 0 0 0.2em;
  font-size: 0.8em;
`;
