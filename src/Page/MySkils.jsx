import React from "react";
import SkillsMarquee from "./SkillsMarquee";

const skills = [
  { name: "HTML", percent: 80 },
  { name: "css", percent: 70 },
  { name: "JavaScript", percent: 80 },
  { name: "react", percent: 70 },
  { name: "Node js", percent: 60 },
];

const professionalSkills = [
  { name: "Team Work", percent: 30 },
  { name: "Creativity", percent: 50 },
  { name: "Project Management", percent: 30 },
  { name: "Communication", percent: 30 },
];

const MySkills = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          {skills.map((skill, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-cyan-400 h-3 rounded-full"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 md:pl-15">Professional Skills</h3>
          <div className="grid grid-cols-2 gap-6">
            {professionalSkills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full">
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="#2d3748"
                      strokeWidth="10"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="#06b6d4"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="264"
                      strokeDashoffset={264 - (264 * skill.percent) / 100}
                      strokeLinecap="round"
                      transform="rotate(-90 48 48)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                    {skill.percent}%
                  </div>
                </div>
                <span className="mt-2 text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
     <div>
        <h4 className="text-2xl font-bold text-[#00b4d8] text-center mt-20">All Skils</h4>
        <SkillsMarquee/>
     </div>
    </section>
  );
};

export default MySkills;
