import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import CreationComponent from "styled/components/creation/CreationComponent";

const Creation: NextPage = () => {
  return <CreationComponent />;
};

export default Creation;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
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
