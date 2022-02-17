import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div>There will be an app!</div>
    </div>
  );
};

export async function getServerSideProps() {
  // There will be session check

  return {
    redirect: {
      pernament: false,
      destination: "/login"
    }
  };
}

export default Home;
