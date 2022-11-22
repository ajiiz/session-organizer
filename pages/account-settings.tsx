import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import AccountSettingsComponent from "styled/components/account-settings/AccountSettingsComponent";

const AccountSettings: NextPage = () => {
  return <AccountSettingsComponent />;
};

export default AccountSettings;

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
