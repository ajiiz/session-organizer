import { GetEventsResponse, path } from "../../../pages/api/events/getEvents";
import { getEmptyPromise } from "network/basePromises";

export const getEvents = () => {
  return getEmptyPromise<GetEventsResponse>(path);
};
