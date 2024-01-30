import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Story2() {
  const phrases = [
    "We don't just design spaces, we",
    "weave narratives. Established in",
    "2009, our journey in the world of",
    "architecture and interior design has",
    "been a tale of passion, innovation,",
    "and transformative creativity.",
  ];

  return (
    <div className="text-center py-12 sm:py-32 sm:px-24">
      <h2 className="text-primary-gray text-2xl opacity-50 mb-12 sm:mb-32">
        Our Story
      </h2>
      <div className="text-primary-gray text-2xl sm:text-[64px] sm:leading-[77px] mx-auto">
        {phrases.map((phrase, index) => {
          return <AnimatedText key={index}>{phrase}</AnimatedText>;
        })}
      </div>
    </div>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(text.current, {
      scrollTrigger: {
        trigger: text.current,
        start: "0px bottom",
        end: "bottom+=100px bottom",
        scrub: 3,
      },
      left: "0",
      opacity: 1,
    });
  }, []);

  return (
    <p ref={text} className="relative -left-[200px] opacity-0">
      {children}
    </p>
  );
}
