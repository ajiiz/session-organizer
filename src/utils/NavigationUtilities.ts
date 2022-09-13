import router from "next/router";

interface LinkProp {
  link: string;
}

export const goToLink = ({ link }: LinkProp): void => {
  router.push(link);
};

interface CurrentPathProps {
  routerPath: string;
  currentPath: string;
}

export const isCurrentPath = ({ routerPath, currentPath }: CurrentPathProps): boolean => {
  return routerPath === currentPath;
};
