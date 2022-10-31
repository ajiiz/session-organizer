import { RequestAndGroupEventFormData } from "styled/components/creation/useCreation";
import { path } from "../../../pages/api/events/createRequestEvent";
import { postPromise } from "../basePromises";

export const createRequestEvent = async (payload: RequestAndGroupEventFormData) => {
  return postPromise<RequestAndGroupEventFormData>(path, payload);
};
