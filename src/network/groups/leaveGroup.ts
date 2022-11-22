import { LeaveGroupRequest, path } from "../../../pages/api/groups/leaveGroup";
import { postPromise } from "../basePromises";

export const leaveGroup = async (payload: LeaveGroupRequest) => {
  return postPromise<LeaveGroupRequest>(path, payload);
};
