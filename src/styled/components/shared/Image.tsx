import Image from "next/image";
import styled from "styled-components";
import { Property } from "csstype";

interface ProjectImageProps {
  width?: Property.Width;
  height?: Property.Height;
}

export const ProjectImage = styled(Image)<ProjectImageProps>`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
`;
