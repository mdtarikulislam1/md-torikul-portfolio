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
      .then((res) => {
        return res.json();
      })
      .then((projects) => {
        const project = projects.find((p) => p.id === id);
        setData(project || null);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(data);
  return (
    <div className="maxwidth min-h-screen">
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <div>
          <div className="flex flex-wrap justify-center gap-4">
            <img className="w-60 h-80" src={data?.img2} alt="" />
            <img className="w-60 h-80" src={data?.img3} alt="" />
          </div>
          <p className="py-10 text-2xl font-semibold text-[#00b4d8]">
            Over View
          </p>
          <p className="text-white max-w-[480px]">{data?.description}</p>
        </div>

        <div className="border-2 border-cyan-800 p-5 mx-3 rounded-lg">
          <h4 className="py-6 text-2xl font-semibold text-[#00b4d8]">
            Tecnology
          </h4>
          <div className="flex flex-wrap gap-2 text-white">
            {data?.tecnology.map((t, index) => (
              <button
                className="bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-sm"
                key={index}
              >
                {t}
              </button>
            ))}
          </div>
          <h4 className="py-6 text-2xl font-semibold text-[#00b4d8]">
            Key Features
          </h4>
          {data?.feature?.map((f, index) => (
            <div className="flex items-center gap-2 text-white" key={index}>
              <IoIosCheckmarkCircle />
              <p>{f}</p>
            </div>
          ))}
          <h4 className="py-6 text-2xl font-semibold text-[#00b4d8]">
            Project Links
          </h4>
          <div className="flex items-center flex-wrap gap-2">
            <a
              className="bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-sm flex items-center text-white gap-2"
              href={data?.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <VscLiveShare  size={30}/>
              <p>Live Site</p>
            </a>

            <a
              className="bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-sm flex items-center text-white gap-2"
              href={data?.["client-repo-link"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub  size={30}/>
              <p>Client Repo</p>
            </a>

            {data?.["server-repo-link"] && (
              <a
                className="bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded-sm flex items-center text-white gap-2"
                href={data?.["server-repo-link"]}
                target="_blank"
                rel="noopener noreferrer"
              >
               <FaSquareGithub  size={30}/>
                <p>Server Repo</p>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
