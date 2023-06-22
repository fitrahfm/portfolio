import { FunctionComponent, ReactNode } from "react";
import "@/styles/globals.scss";

interface IProps {
  main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  const layout =
    "fm-w-full fm-h-full lg:fm-max-w-[1440px] lg:fm-mx-auto lg:fm-px-24 2xl:fm-px-0";

  return <div className={layout}>{main}</div>;
};

export default Layout;
