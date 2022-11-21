import { JoinGroupRequest, path } from "../../../pages/api/groups/joinGroup";
import { postPromise } from "../basePromises";

export const joinGroup = async (payload: JoinGroupRequest) => {
  return postPromise<JoinGroupRequest>(path, payload);
};
