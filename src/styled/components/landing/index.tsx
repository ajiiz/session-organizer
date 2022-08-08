import { Wrapper } from "styled/elements/shared/Wrapper";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <Wrapper flexDirection="column" height="100vh" alignItems={"flex-start"} justifyContent="flex-start">
      <Navbar />
    </Wrapper>
  );
};

export default Landing;
