import { postPromise } from "network/basePromises";
import { UpdateAccountRoleRequest, path } from "../../../pages/api/users/updateAccountRole";

export const updateAccountRole = async (payload: UpdateAccountRoleRequest) => {
  return postPromise<UpdateAccountRoleRequest>(path, payload);
};
