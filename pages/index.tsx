import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <div>
      <div>Landing page</div>
    </div>
  );
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

  if (!session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin"
      }
    };
  }

  return {
    props: {}
  };
};
