"use client";

import { useEffect } from "react";
import Hero from "./components/sections/Hero";
import Story from "./components/sections/Story";
import Expertise from "./components/sections/Expertise";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function Home() {
  useEffect(() => {
    const initLocomotiveScroll = async () => {
      const mobileBreakpoint = 768;

      if (window.innerWidth >= mobileBreakpoint) {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    };

    initLocomotiveScroll();

    // Add event listener for window resize
    const handleResize = () => {
      initLocomotiveScroll();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <Hero />
      <Story />
      <Expertise />
      <Projects />
      <Contact />
    </main>
  );
}
