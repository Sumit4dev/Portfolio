import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl">About me</h2>

      <div className="flex w-full flex-col  lg:flex-row items-center gap-20 my-20">
        <div className="w-74 sm:w-80 rounded-3xl max-w-none">
          <Image
            className="w-full rounded-3xl"
            alt="user"
            src={assets.user_image}
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            I'm a frontend-focused developer who believes great products are
            born from clean code, thoughtful design, and seamless user
            experience. My backend knowledge empowers me to build apps that are
            not just beautiful — but also scalable, secure, and API-driven. I’m
            always exploring new tools in the JavaScript ecosystem, and I love
            working on projects that challenge both my UI and logic-building
            skills. 🛠️ Currently improving my system design and full-stack
            deployment skills.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map((item  ,index )=>(
              <li key={index} className=" hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0px_#000] border-[0.5px] hover:-translate-y-1 duration-500 border-gray-400 rounded-xl p-6 cursor-pointer">
                <Image className="w-7 mt-3" src={item.icon} alt="{item.title}" />
                <h3 className="my-4 font-semibold text-gray-700">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-2xl font-semibold text-gray-700">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {
              toolsData.map((tool , index) =>(
                 <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={index}>
                   <Image className="w-5 sm:w-7" src={tool} alt="Tool" />
                 </li>
              
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
