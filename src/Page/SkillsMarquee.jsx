import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase,
} from "react-icons/si";
import '../Css/skillsMarque.css';

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "GitHub", icon: <FaGithub /> },
];

export default function SkillsMarquee() {
  return (
    <div className="skills-wrapper">
      {/* Column 1 */}
      <div className="skills-container">
        <div className="scroll-track">
          {[...Array(2)].map((_, i) => (
            <div className="scroll-content" key={i}>
              {skills.map((skill, idx) => (
                <button key={idx} className="social-button">
                  <span className="icon-text">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Column 2 with different direction or delay */}
      <div className="skills-container reverse">
        <div className="scroll-track reverse">
          {[...Array(2)].map((_, i) => (
            <div className="scroll-content" key={i}>
              {skills.map((skill, idx) => (
                <button key={idx} className="social-button">
                  <span className="icon-text">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
