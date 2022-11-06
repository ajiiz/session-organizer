import styled from "styled-components";
import { device } from "styled/base/Responsive";

interface ContentWrapperProps {
  customMargin?: boolean;
}

export const ContentWrapper = styled.section<ContentWrapperProps>`
  width: 100%;
  height: 100%;
  padding: 8rem 5rem 0 5rem;
  margin-bottom: ${({ customMargin }) => (customMargin ? "2.5rem" : null)};

  ${device.smalldesktop} {
    width: 100%;
    padding: 3rem 5rem 0 5rem;
  }

  ${device.tablet} {
    padding: 2.5rem 2.5rem 0 2.5rem;
  }

  ${device.mobile} {
    margin-bottom: 5em;
    padding: 1rem 2.5rem 0 2.5rem;
    height: fit-content;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
