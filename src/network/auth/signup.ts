import { SigninRequest, path } from "../../../pages/api/auth/signup";
import { postPromise } from "../basePromises";

export const signin = (payload: SigninRequest) => {
  return postPromise<SigninRequest>(path, payload);
};
