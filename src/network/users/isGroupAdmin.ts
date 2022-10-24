import { IsGroupAdminRequest, IsGroupAdminResponse, path } from "../../../pages/api/users/isGroupAdmin";
import { getPromise } from "../basePromises";

export const isGroupAdmin = (payload: IsGroupAdminRequest): Promise<IsGroupAdminResponse> => {
  return getPromise<IsGroupAdminRequest, IsGroupAdminResponse>(path, payload);
};
