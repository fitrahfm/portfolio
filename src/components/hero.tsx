"use client";
import { FunctionComponent } from "react";

const Hero: FunctionComponent = () => {
  return (
    <header
      className={`fm-flex fm-flex-col fm-justify-around fm-h-[${window.innerHeight}px] lg:fm-justify-center fm-px-[50px] fm-py-[70px] lg:fm-p-0 fm-text-2xl max-[320px]:fm-text-xl lg:fm-text-4xl fm-tracking-widest fm-leading-normal lg:fm-leading-relaxed selection:fm-bg-yellow-400 dark:selection:fm-text-neutral-950`}
    >
      <h1 className="fm-relative fm-w-fit after:fm-w-7 max-[320px]:after:fm-w-5 lg:after:fm-w-10 after:fm-h-7 max-[320px]:after:fm-h-5 lg:after:fm-h-10 after:fm-content-[''] after:fm-absolute after:fm-top-[3px] lg:after:fm-top-[8px] after:fm-right-[-2rem] max-[320px]:after:fm-right-[-1.5rem] lg:after:fm-right-[-3rem] after:fm-block after:fm-bg-waving after:fm-bg-no-repeat after:fm-bg-contain">
        Hello!
      </h1>
      <h1 className="fm-my-16 max-[320px]:fm-my-[30px] lg:fm-w-[60%] ">
        I&apos;m <strong className="fm-font-semibold">Fitrah Munir</strong>, a
        design-minded front-end engineer focused on building beautiful
        interfaces & experiences
      </h1>
      <div className="fm-text-sm max-[320px]:fm-text-xs lg:fm-text-xl">
        <span className="fm-relative lg:fm-mr-10 fm-block lg:fm-inline-block lg:after:fm-w-7 lg:after:fm-h-7 lg:after:fm-content-[''] lg:after:fm-absolute lg:after:fm-top-0 lg:after:fm-right-[-2rem] lg:after:fm-block lg:after:fm-bg-pointing-right lg:after:fm-bg-no-repeat lg:after:fm-bg-contain">
          Get in touch
        </span>
        <a
          href="#"
          className="fm-relative max-[540px]:before:fm-w-5 max-[540px]:before:fm-h-5 max-[540px]:before:fm-content-[''] max-[540px]:before:fm-relative max-[540px]:before:fm-inline-block max-[540px]:before:fm-top-[5px] max-[540px]:before:fm-left-0 max-[540px]:before:fm-mr-2 max-[540px]:before:fm-bg-pointing-right max-[540px]:before:fm-bg-no-repeat max-[540px]:before:fm-bg-contain"
        >
          <span className="fm-py-1 fm-border-b-[3px] fm-border-sky-400 dark:fm-border-yellow-400 hover:fm-bg-sky-400 dark:hover:fm-bg-yellow-400 hover:fm-text-stone-50 dark:hover:fm-text-neutral-950">
            fitrahmunir@outlook.com
          </span>
        </a>
      </div>
    </header>
  );
};

export default Hero;
