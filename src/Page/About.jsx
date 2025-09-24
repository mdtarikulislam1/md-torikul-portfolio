import React from "react";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { RiNodejsLine } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

export default function About() {
  const skill = [
    {
      id: 1,
      t: "Java script",
      icon: <TbBrandJavascript />,
    },
    {
      id: 2,
      t: "Java script",
      icon: <GrReactjs />,
    },
    {
      id: 3,
      t: "Java script",
      icon: <RiNodejsLine />,
    },
    {
      id: 4,
      t: "Java script",
      icon: <FaCss3 />,
    },
    {
      id: 5,
      t: "Java script",
      icon: <SiExpress />,
    },
    {
      id: 6,
      t: "Java script",
      icon: <RiNextjsLine />,
    },
  ];

  return (
    <div className="maxwidth px-4">
      <h3 className="text-2xl font-bold text-[#00b4d8] text-center py-8">
        About Us
      </h3>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {
          skill.map(s=>(
           <div key={s?.id} className="border-2 border-[#00b4d8] bg-gradient-to-tr from-gray-500 to-gray-900 rounded-lg p-5 flex flex-col justify-center items-center">
            <div className="text-[#00b4d8] text-4xl animate-bounce">{s?.icon}</div>
            <p className="font-semibold text-xl text-white">{s?.t}</p>
           </div>
          ))
        }
      </div>
      <div>
        <h4 className="text-gray-100 text-lg py-2">
          <span className="text-white font-semibold text-xl">Location:</span> Rajshahi
          Bangladesh
        </h4>
        <p className="text-gray-100">
          I am a passionate Frontend Developer with a strong eagerness to
          explore and learn new technologies. Currently, I am learning Next.js
          while recapping my JavaScript skills to strengthen my foundations. My
          learning journey started in school, where I completed my early
          education and graduated from Class 5 with GPA 5. Later, I enrolled in
          a Madrasha and successfully completed my Hifz. After that, I appeared
          for my SSC examination and began my journey into the world of
          programming. I learned coding from Programming Hero and have been
          improving my skills through continuous practice and projects. My
          ambition is to become a skilled Fullstack Developer and work on
          impactful projects that make a difference in the tech industry.
        </p>
      </div>
     </div>
    </div>
  );
}
