import { UpdateGroupRequest, path } from "../../../pages/api/groups/updateGroup";
import { postPromise } from "../basePromises";

export const updateGroup = async (payload: UpdateGroupRequest) => {
  return postPromise<UpdateGroupRequest>(path, payload);
};
