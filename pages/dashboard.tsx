import type { GetServerSideProps, NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";

const Dashboard: NextPage = () => {
  const session = useSession();

  return (
    <div>
      <div>Dashboard available!</div>
      {session.data?.user && <button onClick={() => signOut({ callbackUrl: "/signin" })}>Sign out</button>}
    </div>
  );
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
