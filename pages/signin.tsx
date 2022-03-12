import type { NextPage } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken } from "next-auth/react";
import { SignIn } from "src/styled/components/auth/SignIn";

interface SigninProps {
  csrfToken: string | undefined;
}

const signIn: NextPage<SigninProps> = ({ csrfToken }) => {
  return <SignIn csrfToken={csrfToken} />;
};

export default signIn;

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  };
};
