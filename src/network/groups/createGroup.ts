import { GroupFormData } from "styled/components/creation/useCreation";
import { path } from "../../../pages/api/groups/createGroup";
import { postPromise } from "../basePromises";

export const createGroup = async (payload: GroupFormData) => {
  return postPromise<GroupFormData>(path, payload);
};
