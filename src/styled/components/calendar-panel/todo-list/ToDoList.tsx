import { useEffect, useState } from "react";
import { DailyToDo } from "@prisma/client";
import { createTask } from "network/tasks/createTask";
import { getTasks } from "network/tasks/getTasks";
import CloseIcon from "assets/icons/navigation-panel/close-icon.svg";
import { StyledImage } from "styled/elements/shared/StyledImage";
import { deleteTask } from "network/tasks/deleteTask";
import * as S from "./ToDoList.styled";

const ToDoList = () => {
  const [taskList, setTaskList] = useState<DailyToDo[]>([]);
  const [currentTask, setCurrentTask] = useState<string>("");

  const handleSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const task = (event.target as HTMLInputElement).value;
      addTask(task);
    }
  };

  const handleRemoveTask = async (taskId: string) => {
    removeTask(taskId);
  };

  const addTask = async (task: string) => {
    try {
      await createTask({ task });
      getTaskList();
    } catch (error) {
      console.error(error);
    } finally {
      setCurrentTask("");
    }
  };

  const removeTask = async (taskId: string) => {
    try {
      await deleteTask({ taskId });
      getTaskList();
    } catch (error) {
      console.error(error);
    }
  };

  const getTaskList = async () => {
    try {
      const data = await getTasks();
      setTaskList(data.tasks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <S.ToDoListWrapper>
      <S.ToDoListHeader>Todays todo</S.ToDoListHeader>
      <S.ToDoListInput
        value={currentTask}
        type="text"
        placeholder="Add new task"
        onKeyDown={handleSubmit}
        onChange={event => setCurrentTask(event.target.value)}
        maxLength={18}
      />
      <S.TaskList>
        {taskList.map(task => (
          <S.TaskItemWrapper>
            <S.TaskItem key={task.id}>{task.text}</S.TaskItem>
            <StyledImage src={CloseIcon} alt="Close icon" onClick={() => handleRemoveTask(task.id)} />
          </S.TaskItemWrapper>
        ))}
      </S.TaskList>
    </S.ToDoListWrapper>
  );
};

export default ToDoList;
