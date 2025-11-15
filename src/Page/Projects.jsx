import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div name="projects" className="maxwidth my-12 px-3">
      <h4 
        data-aos="fade-up"
        className="font-semibold text-cyan-400 pb-10 text-3xl text-center tracking-widest"
      >
        Featured Projects
      </h4>

      <div className="flex flex-wrap justify-center gap-8">
        {data.map((d) => (
          <ProjectCard d={d} key={d?.id} />
        ))}
      </div>
    </div>
  );
}
