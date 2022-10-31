import { RequestAndGroupEventFormData } from "styled/components/creation/useCreation";
import { path } from "../../../pages/api/events/createRequestAndGroupEvent";
import { postPromise } from "../basePromises";

export const createRequestAndGroupEvent = async (payload: RequestAndGroupEventFormData) => {
  return postPromise<RequestAndGroupEventFormData>(path, payload);
};
