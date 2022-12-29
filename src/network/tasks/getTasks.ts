import { GetTasksResponse, path } from "../../../pages/api/tasks/getTasks";
import { getEmptyPromise } from "../basePromises";

export const getTasks = (): Promise<GetTasksResponse> => {
  return getEmptyPromise<GetTasksResponse>(path);
};
