import { CustomEventFormData } from "styled/components/creation/useCreation";
import { path } from "../../../pages/api/events/createCustomEvent";
import { postPromise } from "../basePromises";

export const createCustomEvent = async (payload: CustomEventFormData) => {
  return postPromise<CustomEventFormData>(path, payload);
};
