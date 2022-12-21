import { GetUsersResponse, path } from "../../../pages/api/users/getUsers";
import { getEmptyPromise } from "../basePromises";

export const getUsers = (): Promise<GetUsersResponse> => {
  return getEmptyPromise<GetUsersResponse>(path);
};
