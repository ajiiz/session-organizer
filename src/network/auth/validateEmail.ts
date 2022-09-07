import { ValidateEmailRequest, ValidateEmailResponse, path } from "../../../pages/api/auth/validateEmail";
import { getPromise } from "../basePromises";

export const validateEmail = (payload: ValidateEmailRequest): Promise<ValidateEmailResponse> => {
  return getPromise<ValidateEmailRequest, ValidateEmailResponse>(path, payload);
};
