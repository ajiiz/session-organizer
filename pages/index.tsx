import type { GetServerSideProps, NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const session = useSession();

  return (
    <div>
      <div>Hello session exam!</div>
      {session.data?.user && <button onClick={() => signOut()}>Sign out</button>}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

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
