"use client";
import { FunctionComponent, useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import tailwindConfig from "tailwind.config";

interface IProps {
  theme: string;
}

const ThemeSwitch: FunctionComponent<IProps> = ({ theme }) => {
  const [enabled, setEnabled] = useState(theme === "dark" ? true : false);

  useEffect(() => {
    // adjust innerheight of available screen
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  useEffect(() => {
    theme = enabled ? "dark" : "light";

    // set theme class to html tag
    document.documentElement.className = `${tailwindConfig.prefix}${theme}`;
  }, [theme, enabled]);

  return (
    <div className="fm-absolute fm-top-[30px] fm-right-[30px]">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "fm-bg-yellow-200" : "fm-bg-sky-200"
        } fm-relative fm-inline-flex fm-h-[38px] fm-w-[74px] fm-shrink-0 fm-cursor-pointer fm-rounded-full fm-border-2 fm-border-transparent fm-transition-colors fm-duration-200 fm-ease-in-out fm-focus:outline-none fm-focus-visible:ring-2 fm-focus-visible:ring-white fm-focus-visible:ring-opacity-75`}
      >
        <span className="fm-sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? "fm-translate-x-9" : "fm-translate-x-0"
          } fm-pointer-events-none fm-inline-block fm-h-[34px] fm-w-[34px] fm-transform fm-rounded-full fm-bg-white fm-shadow-lg fm-ring-0 fm-transition fm-duration-200 fm-ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ThemeSwitch;
