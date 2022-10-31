import { GetGroupsResponse, path } from "../../../pages/api/groups/getGroups";
import { getEmptyPromise } from "../basePromises";

export const getGroups = () => {
  return getEmptyPromise<GetGroupsResponse>(path);
};
