import { GetEventsRequest, GetEventsResponse, path } from "../../../pages/api/events/getEvents";
import { getPromise } from "../basePromises";

export const getEvents = (payload: GetEventsRequest): Promise<GetEventsResponse> => {
  return getPromise<GetEventsRequest, GetEventsResponse>(path, payload);
};
