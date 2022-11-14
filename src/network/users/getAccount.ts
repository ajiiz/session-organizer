import { GetAccountRequest, GetAccountResponse, path } from "../../../pages/api/users/getAccount";
import { getPromise } from "../basePromises";

export const getAccount = (payload: GetAccountRequest): Promise<GetAccountResponse> => {
  return getPromise<GetAccountRequest, GetAccountResponse>(path, payload);
};
