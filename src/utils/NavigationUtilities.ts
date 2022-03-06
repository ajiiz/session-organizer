import router from "next/router";

interface LinkProp {
  link: string;
}

export function goToLink({ link }: LinkProp): void {
  router.push(link);
}
