import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen flex">
      <div
        className="absolute h-screen w-full"
        data-scroll
        data-scroll-speed="0.3"
      >
        <Image src="/hero-bg.webp" alt="hero" fill={true} />
      </div>
      <div
        className="flex flex-col sm:flex-row gap-6 justify-center sm:items-end sm:justify-between text-primary-white w-full px-4 sm:px-24 mb-6 sm:mb-32 z-10"
        data-scroll
        data-scroll-speed="0.1"
      >
        <h1 className="text-5xl sm:text-[100px] sm:leading-[121px] max-w-[1280px]">
          Unveiling <em>Timeless Elegance</em> in Every Space
        </h1>
        <p className="max-w-[400px]">
          Where design meets innovation, and spaces come alive with creativity.
          As architects and interior designers based in the vibrant heart of
          Indonesia, we bring forth a fusion of cultural richness and
          contemporary finesse.
        </p>
      </div>
    </div>
  );
};

export default Hero;
