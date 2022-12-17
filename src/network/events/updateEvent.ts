import { UpdateEventRequest, path } from "../../../pages/api/events/updateEvent";
import { postPromise } from "../basePromises";

export const updateEvent = async (payload: UpdateEventRequest) => {
  return postPromise<UpdateEventRequest>(path, payload);
};
