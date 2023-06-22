"use client";
import { FunctionComponent, ReactNode, useEffect } from "react";
import tailwindConfig from "tailwind.config";

interface IProps {
  theme: string;
}

const ThemeSwitch: FunctionComponent<IProps> = ({ theme }) => {
  useEffect(() => {
    // set theme class to html tag
    document.documentElement.className = `${tailwindConfig.prefix}${theme}`;

    // adjust innerheight of available screen
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [theme]);

  return <div></div>;
};

export default ThemeSwitch;
