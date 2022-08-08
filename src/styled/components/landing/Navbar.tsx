import { StyledLogo } from "styled/elements/shared/Logo";
import Logo from "assets/Logo.svg";
import { Wrapper } from "styled/elements/shared/Wrapper";

const Navbar = () => {
  return (
    <div
      style={{
        height: "10%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0 25% 0 15%"
      }}
    >
      <Wrapper width={"10%"} height="100%" justifyContent={"center"} alignItems={"center"}>
        <StyledLogo src={Logo} />
        <span style={{ fontSize: "18px", marginLeft: "10px" }}>Listic</span>
      </Wrapper>
      <div>Buttons</div>
    </div>
  );
};

export default Navbar;
