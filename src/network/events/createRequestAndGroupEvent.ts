import { path, RequestAndGroupEventType } from "../../../pages/api/events/createRequestAndGroupEvent";
import { postPromise } from "../basePromises";

export const createRequestAndGroupEvent = async (payload: RequestAndGroupEventType) => {
  return postPromise<RequestAndGroupEventType>(path, payload);
};
