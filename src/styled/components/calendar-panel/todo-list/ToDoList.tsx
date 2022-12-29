import { useState } from "react";
import * as S from "./ToDoList.styled";

const ToDoList = () => {
  const [taskList, setTaskList] = useState<string[]>([]);

  return (
    <S.ToDoListWrapper>
      <S.ToDoListHeader>Todays todo</S.ToDoListHeader>
      <S.ToDoListInput type="text" placeholder="Add new task" />
    </S.ToDoListWrapper>
  );
};

export default ToDoList;
