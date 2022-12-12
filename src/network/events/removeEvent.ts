import { RemoveEventRequest, path } from "../../../pages/api/events/removeEvent";
import { deletePromise } from "../basePromises";

export const removeEvent = async (payload: RemoveEventRequest) => {
  return deletePromise<RemoveEventRequest>(path, payload);
};
