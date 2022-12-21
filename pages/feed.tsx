import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import FeedComponent from "styled/components/feed/FeedComponent";

const Feed: NextPage = () => {
  return <FeedComponent />;
};

export default Feed;

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
