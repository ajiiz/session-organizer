import { GetAccountsResponse, path } from "../../../pages/api/users/getAccounts";
import { getEmptyPromise } from "../basePromises";

export const getAccounts = (): Promise<GetAccountsResponse> => {
  return getEmptyPromise<GetAccountsResponse>(path);
};
