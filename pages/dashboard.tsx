import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import DashboardComponent from "styled/components/dashboard/DashboardComponent";

const Dashboard: NextPage = () => {
  return <DashboardComponent />;
};

export default Dashboard;

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
