import type { NextPage } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken } from "next-auth/react";

interface SigninProps {
  csrfToken: string;
}

const signIn: NextPage<SigninProps> = ({ csrfToken }) => {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
};

export default signIn;

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  };
};
