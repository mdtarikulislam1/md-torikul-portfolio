import { BiLogoFigma } from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import "../Css/skillsMarque.css";

const allSkils = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Figma", icon: <BiLogoFigma /> },
];

export default function SkillsMarquee() {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      {allSkils.map((s) => (
        <button className="social-button">
          <span className="icon-text">
           {s?.icon}
           {s?.name}
          </span>
        </button>
      ))}
    </div>
  );
}
