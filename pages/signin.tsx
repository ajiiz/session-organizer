import type { NextPage } from "next";
import { CtxOrReq } from "next-auth/client/_utils";
import { getCsrfToken, getSession } from "next-auth/react";
import Login from "styled/components/authentication/Login";

interface SigninProps {
  csrfToken: string | undefined;
}

const signIn: NextPage<SigninProps> = ({ csrfToken }) => {
  return <Login csrfToken={csrfToken} />;
};

export default signIn;

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  const session = await getSession(context);

  if (session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  };
};
