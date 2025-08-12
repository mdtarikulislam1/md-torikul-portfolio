import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("project.json")
      .then((res) => {
        return res.json(); 
      })
      .then((data) => {
        setData(data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  return (
    <div name="projects" className="maxwidth my-20">
      <h4 className="font-semibold text-cyan-400 text-2xl text-center py-20">
        Featured Project
      </h4>
      <div className="flex flex-wrap gap-3">
        {
          data.map(d=><ProjectCard d={d} key={d?.id}></ProjectCard>)
        }
      </div>
    </div>
  );
}
