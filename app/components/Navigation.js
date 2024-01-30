"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const Navigation = () => {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 0;
  //     setScrolled(isScrolled);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      className={clsx(
        "flex w-full items-center justify-between absolute top-0 z-50 h-28 px-4 sm:px-24 transition-all"
      )}
    >
      <a href="#">
        <Image
          src="archie-logo.svg"
          priority
          alt="logo"
          width={177}
          height={31}
          className="h-6 w-auto sm:h-[31px] sm:w-[177px]"
        />
      </a>
      <div className="flex items-center gap-4 sm:gap-8 text-white">
        <button
          className={clsx(
            "flex items-center justify-center w-[125px] h-[30px] text-sm sm:text-base sm:w-[189px] sm:h-[57px] border border-white rounded-full hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-all"
          )}
        >
          Let&apos;s talk
        </button>
        <a href="#">
          <u>menu</u>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
