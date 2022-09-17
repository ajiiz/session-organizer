import styled from "styled-components";
import Image from "next/image";
import { Colors } from "styled/base/Colors";
import { device } from "styled/base/Responsive";
import { Property } from "csstype";

export const HeroWrapper = styled.div`
  height: 80%;
  width: 100%;
  padding: 0 15% 10% 15%;
  display: flex;
  align-items: center;

  ${device.smalldesktop} {
    padding: 10%;
  }

  ${device.tablet} {
    height: fit-content;
    flex-direction: column-reverse;
  }

  ${device.mobile} {
    height: 100%;
    justify-content: center;
  }
`;

export const HeroContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${device.tablet} {
    width: 100%;
    margin-top: 4rem;
    align-items: center;
  }

  ${device.mobile} {
    margin: 0;
  }
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 4.75em;

  ${device.smalldesktop} {
    font-size: 3.75em;
  }

  ${device.tablet} {
    text-align: center;
  }

  ${device.mobile} {
    font-size: 3.6em;
  }
`;

export const Paragraph = styled.p`
  width: 80%;
  margin: 0 0 2rem 0;
  padding: 0;
  font-size: 1.3em;
  line-height: 150%;
  color: ${Colors.LightGrayColor};

  ${device.smalldesktop} {
    width: 100%;
    font-size: 1.2em;
  }

  ${device.tablet} {
    text-align: center;
  }

  ${device.mobile} {
    font-size: 1.1em;
  }
`;

interface ImageWrapperProps {
  width?: Property.Width;
  height?: Property.Height;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
  display: flex;

  ${device.smalldesktop} {
    width: 50%;
  }

  ${device.tablet} {
    width: 60%;
  }

  ${device.mobile} {
    display: none;
  }
`;

export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  align-self: center;
`;
