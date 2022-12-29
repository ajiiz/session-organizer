import { DeleteTaskRequest, path } from "../../../pages/api/tasks/deleteTask";
import { deletePromise } from "../basePromises";

export const deleteTask = async (payload: DeleteTaskRequest) => {
  return deletePromise<DeleteTaskRequest>(path, payload);
};
