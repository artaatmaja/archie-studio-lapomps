import React from "react";
import Image from "next/image";

const Expertise = () => {
  return (
    <div className="text-center py-12 sm:py-32">
      <h2 className="text-primary-gray text-2xl opacity-50 mb-12 sm:mb-32">
        Our Expertise
      </h2>
      <div className="flex flex-col sm:flex-row items-start">
        <div className="relative flex-1 w-full min-h-[475px] p-6 sm:h-[801px] flex items-center overflow-hidden group cursor-pointer">
          <Image
            src="/expertise1.webp"
            fill={true}
            sizes="23vw"
            alt="Architectural"
            className="group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="z-10 text-primary-white w-full">
            <h3 className="text-5xl sm:text-[100px] mb-10 leading-[121px]">
              Archi<em>tectural</em>
            </h3>
            <p className="max-w-[450px] mx-auto min-h-[120px]">
              With a team of visionary architects, we embark on the journey of
              architectural innovation. From conceptualization to execution, we
              push the boundaries of design, creating structures that seamlessly
              blend form, function, and sustainability.
            </p>
          </div>
        </div>
        <div className="relative flex-1 w-full min-h-[475px] p-6 sm:h-[801px] flex items-center overflow-hidden group cursor-pointer">
          <Image
            src="/expertise2.webp"
            fill={true}
            sizes="23vw"
            alt="Interior Design"
            className="group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="z-10 text-primary-white w-full">
            <h3 className="text-5xl sm:text-[100px] mb-10 leading-[121px]">
              Interior <em>Design</em>
            </h3>
            <p className="max-w-[450px] mx-auto min-h-[120px]">
              Our interior design team is a symphony of creativity and
              functionality. We curate interiors that tell stories, where each
              element is thoughtfully chosen to enhance the overall aesthetic
              and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
