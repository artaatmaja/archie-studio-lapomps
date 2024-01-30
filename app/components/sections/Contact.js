"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Contact = () => {
  const runningText = useRef(null);

  useLayoutEffect(() => {
    let animation;

    const animateText = () => {
      animation = gsap.fromTo(
        runningText.current,
        {
          xPercent: 0,
        },
        {
          xPercent: -50,
          duration: 20,
          ease: "none",
          repeat: -1,
        }
      );
    };

    animateText();

    return () => {
      // Cleanup function: Stop the animation when the component is unmounted
      if (animation) {
        animation.kill(); // Kill the animation to prevent memory leaks
      }
    };
  }, []);

  return (
    <>
      <div className="py-12 sm:py-32 px-6 sm:px-24">
        <div className="py-12 sm:py-32 flex flex-col sm:flex-row justify-between">
          <div>
            <h2 className="text-5xl sm:text-[64px] max-w-[600px] sm:leading-[77px]">
              Ready to transform your space?
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <a href="#" className="flex items-start gap-4 pt-6 group">
              <p className="text-[32px] leading-3">Contact us today</p>
              <Image
                src="/ext_link.svg"
                alt="ext_link"
                width={23}
                height={23}
                className="group-hover:-translate-y-1 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="overflow-hidden pb-12 sm:pb-32">
        <h2
          ref={runningText}
          className="text-5xl sm:text-[160px] whitespace-nowrap"
        >
          <span>
            Let&apos;s <em>Create your Vision</em> Together {""}
          </span>
          <span>
            Let&apos;s <em>Create your Vision</em> Together {""}
          </span>
          <span>
            Let&apos;s <em>Create your Vision</em> Together {""}
          </span>
        </h2>
      </div>
    </>
  );
};

export default Contact;
