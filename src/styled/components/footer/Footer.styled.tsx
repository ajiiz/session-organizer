import styled from "styled-components";
import { device } from "styled/base/Responsive";
import { Colors } from "styled/base/Colors";
import hexToRgba from "hex-to-rgba";

export const Wrapper = styled.footer`
  width: 100%;
  height: 8%;
  padding: 0 15%;
  display: flex;
  align-items: center;

  ${device.smalldesktop} {
    padding: 0 10%;
  }

  ${device.mobile} {
    font-size: 0.7em;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.5px solid rgba(155, 154, 151, 0.75);
  font-family: InterLight;
  font-size: 0.9em;
  color: ${Colors.GrayColor};

  ${device.tablet} {
    padding: 0;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${device.mobile} {
    gap: 0;
  }
`;

export const Link = styled.a`
  padding: 0.2rem 0.5rem;
  &:hover {
    background: ${hexToRgba(Colors.GrayColor, 0.1)};
  }

  ${device.mobile} {
    text-align: center;
  }
`;

export const Copyright = styled.div`
  ${device.mobile} {
    text-align: center;
  }
`;
