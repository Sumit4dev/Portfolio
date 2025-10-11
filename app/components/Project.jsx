import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">My portfolio</h4>
      <h2 className="text-center text-5xl">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development
      </p>

      <div className="grid md:grid-cols-4 my-10 gap-5">
        {workData.map((project, index) => (
          <a target="_blank" href={project.href} key={index}>
            <div
              className="aspect-square bg-no-repeat bg-contain shadow-md border border-gray-100 rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
            <div  className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7 gap-x-5">
              <div>
                <h2 className="font-semibold ">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>

              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image className="w-5" alt="send-icon" src={assets.send_icon} />
              </div>
            </div>
          </div>
          </a>
        ))}
      </div>

      <a className="w-max flex items-center gap-2 justify-center text-gray-700 border-[0.5px] hover:bg-[#fcf4ff] duration-500 border-gray-700 rounded-full py-3 px-10 mx-auto mt-20" href="">
        show more <Image className="w-4" src={assets.right_arrow_bold} alt="" />
      </a>
    </div>
  );
};

export default Project;
