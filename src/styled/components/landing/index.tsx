import { Wrapper } from "styled/elements/shared/wrappers/Wrapper";
import Navbar from "../navbar/Navbar";

const Landing = () => {
  return (
    <Wrapper flexDirection="column" height="100vh" alignItems="flex-start" justifyContent="flex-start">
      <Navbar />
    </Wrapper>
  );
};

export default Landing;
