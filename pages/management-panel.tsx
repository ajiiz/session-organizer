import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import ManagemenetComponent from "styled/components/management-panel/ManagemenetComponent";

const ManagementPanel: NextPage = () => {
  return <ManagemenetComponent />;
};

export default ManagementPanel;

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
