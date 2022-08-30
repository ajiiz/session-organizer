import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Landing from "styled/components/landing/Landing";

const Home: NextPage = () => {
  return <Landing />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard"
      }
    };
  }

  return {
    props: {}
  };
};
