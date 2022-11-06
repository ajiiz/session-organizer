import { Property } from "csstype";
import Image from "next/image";
import styled from "styled-components";

type StyledImageProps = {
  width?: Property.Width;
  height?: Property.Height;
  alignSelf?: Property.AlignSelf;
};

export const StyledImage = styled(Image)<StyledImageProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  align-self: ${({ alignSelf }) => alignSelf};
`;
