import { CreateTaskRequest, path } from "../../../pages/api/tasks/createTask";
import { postPromise } from "../basePromises";

export const createTask = async (payload: CreateTaskRequest) => {
  return postPromise<CreateTaskRequest>(path, payload);
};
