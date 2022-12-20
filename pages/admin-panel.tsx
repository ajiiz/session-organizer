import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import AdminPanelComponent from "styled/components/admin-panel/AdminPanelComponent";

const AdminPanel: NextPage = () => {
  return <AdminPanelComponent />;
};

export default AdminPanel;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user || (session?.user?.role !== "administrator" && session?.user?.role !== "examinator")) {
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
