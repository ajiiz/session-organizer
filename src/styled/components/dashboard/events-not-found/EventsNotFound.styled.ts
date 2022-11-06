import styled from "styled-components";
import { Colors } from "styled/base/Colors";
import { Property } from "csstype";
import { device } from "styled/base/Responsive";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  ${device.tablet} {
    text-align: center;
  }
`;

export const Header = styled.h1`
  margin: 0;
  font-family: InterSemiBold;
  font-size: 2.8em;
`;

export const Paragraph = styled.p`
  margin: 1.5rem 0 0 0.3rem;
  font-size: 0.9em;
  letter-spacing: 0.05em;
  color: ${Colors.LightGrayColor};
`;

interface ImageWrapperProps {
  width?: Property.Width;
  height?: Property.Height;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  height: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: center;

  ${device.tablet} {
    margin-top: 6rem;
  }
`;
