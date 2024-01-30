import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="pb-6 sm:pb-32 sm:px-24">
      <h2 className="mb:12 sm:mb-32 text-center">Our Projects</h2>
      <div className="flex flex-col-reverse">
        <div className="grid sm:grid-cols-3 sm:gap-44 mt-16">
          <div className="col-span-1">
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project1_1.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project1_2.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project1_3.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project1_4.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
          </div>
          <div className="col-span-1 relative sm:mt-[50%]">
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project2_1.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project2_2.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project2_3.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project2_4.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
          </div>
          <div className="col-span-1 relative sm:mt-[25%]">
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project3_1.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project3_2.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project3_3.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
            <div className="relative h-[350px] w-auto sm:w-[23vw]">
              <Image
                src="/project3_4.png"
                alt="project"
                fill={true}
                data-scroll
                data-scroll-speed="0.3"
                sizes="23vw"
              />
            </div>
          </div>
        </div>
        <div className="space-y-12 sm:space-y-32 text-center sticky bg-white bg-opacity-70 top-32 w-full max-w-[1100px] mx-auto rounded-lg p-16">
          <h3 className="text-3xl sm:text-[100px] sm:leading-[121px]">
            Discover the Canvas of <em>Our Creativity</em>
          </h3>
          <button className="hover-slide-up w-[256px] h-[57px] mx-auto flex items-center justify-center rounded-full border border-primary-gray text-2xl hover:bg-primary-blue hover:text-white hover:border-primary-blue transition-all">
            <span>See all projects</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
