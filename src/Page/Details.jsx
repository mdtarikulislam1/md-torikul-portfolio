import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { VscLiveShare } from "react-icons/vsc";
import { FaSquareGithub } from "react-icons/fa6";

export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((projects) => {
        const project = projects.find((p) => p.id === id);
        setData(project || null);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="maxwidth my-20 text-white">
      <div
        className="
          flex flex-col md:flex-row justify-center gap-10 
          bg-[#0f172a]/40 backdrop-blur-xl 
          p-10 rounded-2xl shadow-xl border border-cyan-700/30
        "
        data-aos="fade-up"
        data-aos-duration="900"
      >
        {/* Left Section */}
        <div>
          {/* Images */}
          <div className="flex flex-wrap justify-center gap-4">
            <img
              className="
                w-60 h-80 rounded-lg 
                border border-cyan-600/30 
                shadow-lg shadow-cyan-900/40 
                hover:scale-105 transition-all duration-300
              "
              src={data?.img2}
              alt=""
            />

            <img
              className="
                w-60 h-80 rounded-lg 
                border border-cyan-600/30 
                shadow-lg shadow-cyan-900/40 
                hover:scale-105 transition-all duration-300
              "
              src={data?.img3}
              alt=""
            />
          </div>

          {/* Overview */}
          <p className="py-10 text-3xl px-2 font-semibold text-cyan-400">
            Overview
          </p>

          <p className="text-gray-300 max-w-[500px] px-2 leading-7">
            {data?.description}
          </p>
        </div>

        {/* Right Section */}
        <div
          className="
            bg-[#0a1323]/60 backdrop-blur-xl 
            p-7 rounded-xl 
            border border-cyan-700/40 
            shadow-md shadow-cyan-900/40 
            w-full max-w-[380px]
          "
        >
          {/* Technology */}
          <h4 className="pb-4 text-2xl font-semibold text-cyan-400 border-b border-cyan-600/30">
            Technology
          </h4>

          <div className="flex flex-wrap gap-2 pt-4">
            {data?.tecnology.map((t, index) => (
              <span
                className="
                  bg-cyan-700/30 px-3 py-1 rounded-md 
                  text-sm border border-cyan-500/40 
                  hover:bg-cyan-600/40 transition-all
                "
                key={index}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Features */}
          <h4 className="pt-8 pb-4 text-2xl font-semibold text-cyan-400 border-b border-cyan-600/30">
            Key Features
          </h4>

          <div className="pt-3 space-y-2">
            {data?.feature?.map((f, index) => (
              <div className="flex items-center gap-2 text-gray-300" key={index}>
                <IoIosCheckmarkCircle className="text-cyan-400 text-2xl" />
                <p>{f}</p>
              </div>
            ))}
          </div>

          {/* Links */}
          <h4 className="pt-8 pb-4 text-2xl font-semibold text-cyan-400 border-b border-cyan-600/30">
            Project Links
          </h4>

          <div className="flex items-center flex-wrap gap-3 pt-4">
            <a
              className="
                bg-cyan-700/30 hover:bg-cyan-600/40 
                px-4 py-2 rounded-md flex items-center gap-2 
                text-white border border-cyan-500/40
                transition-all
              "
              href={data?.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscLiveShare size={26} />
              <p>Live Site</p>
            </a>

            <a
              className="
                bg-cyan-700/30 hover:bg-cyan-600/40
                px-4 py-2 rounded-md flex items-center gap-2 
                text-white border border-cyan-500/40
                transition-all
              "
              href={data?.["client-repo-link"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub size={26} />
              <p>Client Repo</p>
            </a>

            {data?.["server-repo-link"] && (
              <a
                className="
                  bg-cyan-700/30 hover:bg-cyan-600/40
                  px-4 py-2 rounded-md flex items-center gap-2 
                  text-white border border-cyan-500/40
                  transition-all
                "
                href={data?.["server-repo-link"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareGithub size={26} />
                <p>Server Repo</p>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
