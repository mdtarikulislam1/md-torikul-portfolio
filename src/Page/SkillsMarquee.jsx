import { BiLogoFigma } from "react-icons/bi";
import { FaBootstrap, FaGitAlt } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
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
  SiShadcnui,
  SiPostman,
} from "react-icons/si";

const frontend = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Next.js", icon: <RiNextjsLine /> },
  { name: "React", icon: <FaReact /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Shadcn UI", icon: <SiShadcnui /> },
  { name: "HTML", icon: <FaHtml5 /> },
];

const backend = [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Firebase", icon: <SiFirebase /> },
];

const tools = [
  { name: "Figma", icon: <BiLogoFigma /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
];

const allSkills = [...frontend, ...backend, ...tools];

export default function SkillsMarquee() {
  return (
    <div className="py-16 bg-[#0f172a]">
      <h2 className="text-center text-4xl font-bold text-cyan-400">
        My Skills
      </h2>

      {/* Main Category Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-10 px-6">
        {/* Frontend */}
        <SkillCard title="Frontend" items={frontend} />

        {/* Backend */}
        <SkillCard title="Backend" items={backend} />

        {/* Tools */}
        <SkillCard title="Tools" items={tools} />
      </div>

      {/* Infinite Scroll Row — Left */}
      <div className="overflow-hidden mt-16">
        <div className="skills-track">
          {[...allSkills, ...allSkills].map((s, i) => (
            <SkillButton key={i} icon={s.icon} name={s.name} />
          ))}
        </div>
      </div>

      {/* Infinite Scroll Row — Right */}
      <div className="overflow-hidden mt-4 ">
        <div className="skills-track-reverse">
          {[...allSkills, ...allSkills].map((s, i) => (
            <SkillButton key={i} icon={s.icon} name={s.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------- Reusable Components ---------------- */

function SkillCard({ title, items }) {
  return (
    <div data-aos="fade-up" className="bg-[#1e293b] p-6 rounded-xl shadow-lg border border-cyan-900/30 hover:scale-105 transition-all duration-5000">
      <h4 className="text-xl font-semibold text-cyan-300">{title}</h4>
      <div className="flex flex-wrap gap-4 mt-4">
        {items.map((s, index) => (
          <SkillButton key={index} icon={s.icon} name={s.name} />
        ))}
      </div>
    </div>
  );
}

function SkillButton({ icon, name }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 text-cyan-300 border border-cyan-400 rounded-lg shadow-md relative overflow-hidden hover:text-white transition group">
      {/* Hover BG Animation */}
      <span className="absolute inset-0 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

      <span className="relative z-10 text-lg">{icon}</span>
      <span className="relative z-10">{name}</span>
    </button>
  );
}
