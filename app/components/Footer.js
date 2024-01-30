"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  const wordRef1 = useRef(null);
  const wordRef2 = useRef(null);
  const currentYear = new Date().getFullYear();

  const splitText = (text, containerRef) => {
    const characters = text.split("");
    containerRef.current.innerHTML = characters
      .map((char) => `<span class="char relative inline-block">${char}</span>`)
      .join("");
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Function to split text into spans
    splitText("Archie", wordRef1);
    splitText("Studio", wordRef2);

    gsap.fromTo(
      ".char",
      {
        yPercent: 130,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.1,
        ease: "back.out(1)",
        scrollTrigger: {
          trigger: wordRef1.current,
          start: "top 80%",
          end: "bottom-=100px 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".char",
      {
        yPercent: 130,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.1,
        ease: "back.out(1)",
        scrollTrigger: {
          trigger: wordRef2.current,
          start: "top 80%",
          end: "bottom-=100px 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-primary-blue pt-20 pb-4 text-primary-white">
      <div className="w-full">
        <h2 className="text-[15vw] text-center overflow-hidden">
          <span ref={wordRef1} className="relative"></span>{" "}
          <em>
            <span ref={wordRef2} className="relative"></span>
          </em>
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-12 items-center justify-between mt-12 sm:mt-48 sm:px-24 px-6">
        <div className="flex flex-wrap gap-12 sm:gap-32">
          <div className="max-w-[293px]">
            <h4 className="text-[24px] sm:text-[32px] sm:leading-9 sm:mb-6">
              Bali, Indonesia
            </h4>
            <p>
              Jl. Dr Muwardi no.7, Denpasar, <br /> Bali, 7107
            </p>
            <p>+62361-877-6514</p>
          </div>
          <div className="max-w-[293px]">
            <h4 className="text-[24px] sm:text-[32px] sm:leading-9 sm:mb-6">
              Jakarta, Indonesia
            </h4>
            <p>Jl Perintis 10 RT 14/01, Central Jakarta, Jakarta, 7107</p>
            <p>+628-21-527-0640</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row text-center sm:text-left gap-3 sm:gap-32">
          <ul className="flex flex-col gap-2 text-[24px] sm:text-[32px]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Expertise</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-[24px] sm:text-[32px]">
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-1 items-center justify-between mt-24 px-6">
        <div className="opacity-50 hover:opacity-100 transition-opacity text-xs sm:text-base">
          &copy; {currentYear} Copyright Archie Studio
        </div>
        <div className="mb-1 sm:mb-0">
          <ul className="flex gap-6">
            <li className="opacity-50 hover:opacity-100 transition-opacity">
              <a href="#" className="text-xs sm:text-base">
                Legal
              </a>
            </li>
            <li className="opacity-50 hover:opacity-100 transition-opacity">
              <a href="#" className="text-xs sm:text-base">
                Privacy
              </a>
            </li>
            <li className="opacity-50 hover:opacity-100 transition-opacity">
              <a href="#" className="text-xs sm:text-base">
                Warranty
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://lapomps.com/"
          target="_blank"
          className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-xs sm:text-base"
        >
          Created by{" "}
          <Image width={69} height={16} src="lapomps.svg" alt="lapomps" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
