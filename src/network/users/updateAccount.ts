import { postPromise } from "network/basePromises";
import { UpdateAccountRequest, path } from "../../../pages/api/users/updateAccount";

export const updateAccount = async (payload: UpdateAccountRequest) => {
  return postPromise<UpdateAccountRequest>(path, payload);
};
