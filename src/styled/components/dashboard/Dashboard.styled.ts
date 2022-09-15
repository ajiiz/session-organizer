import styled from "styled-components";
import { device } from "styled/base/Responsive";

export const SectionWrapper = styled.div`
  width: 80%;

  ${device.smalldesktop} {
    width: 100%;
  }
`;
