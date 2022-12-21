import { GetGroupRequest, GetGroupResponse, path } from "../../../pages/api/groups/getGroup";
import { getPromise } from "../basePromises";

export const getGroup = (payload: GetGroupRequest): Promise<GetGroupResponse> => {
  return getPromise<GetGroupRequest, GetGroupResponse>(path, payload);
};
