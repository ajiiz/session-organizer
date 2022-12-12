import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Register from "styled/components/authentication/Register";

const signIn: NextPage = () => {
  return <Register />;
};

export default signIn;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    };
  }

  return {
    props: {}
  };
};
