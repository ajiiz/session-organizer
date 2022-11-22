import styled from "styled-components";
import { Colors } from "styled/base/Colors";

export const Loader = styled.div`
  display: inline-block;
  width: 45px;
  height: 45px;

  &::after {
    content: "";
    display: block;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: 4px solid ${Colors.GrayColor};
    border-color: ${Colors.GrayColor} transparent ${Colors.GrayColor} transparent;
    animation: dual-ring 1.2s linear infinite;
  }

  @keyframes dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
