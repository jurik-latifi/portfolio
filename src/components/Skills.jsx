import React from "react";
import { FaReact, FaNodeJs, FaJsSquare, FaCss3Alt, FaHtml5, FaJava, FaCode, FaDatabase, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiPostgresql } from "react-icons/si";

const skills = [
  // Professional Skills (2+ years)
  { name: "React", icon: <FaReact className="text-blue-400" />, type: "experience" },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, type: "experience" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, type: "experience" },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" />, type: "experience" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, type: "experience" },
  { name: "CSS/HTML", icon: <><FaCss3Alt className="text-blue-600" /><FaHtml5 className="text-orange-500 ml-2" /></>, type: "experience" },
  { name: "SQL", icon: <FaDatabase className="text-green-300" />, type: "experience" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" />, type: "experience" },

  // Academic Skills (Faculty)
  { name: "Java", icon: <FaJava className="text-red-500" />, type: "academic" },
  { name: "C#", icon: <FaCode className="text-purple-500" />, type: "academic" },
  { name: ".NET", icon: <FaCode className="text-blue-700" />, type: "academic" },
];

const Skills = () => {
  const experienceSkills = skills.filter(s => s.type === "experience");
  const academicSkills = skills.filter(s => s.type === "academic");

  return (
    <section id="skills" className="py-20 bg-primary text-text">
      <h2 className="text-4xl font-bold text-center mb-12 text-accent1">My Skills</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
            <FaBriefcase /> <span>Professional Skills (2+ years)</span>
          </h3>
          <div className="space-y-4">
            {experienceSkills.map((skill, i) => (
              <div key={i} className="flex items-center p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white rounded-xl shadow-lg hover:scale-105 transition-transform">
                <div className="mr-4 text-2xl">{skill.icon}</div>
                <span className="font-semibold text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
            <FaGraduationCap /> <span>Academic Skills</span>
          </h3>
          <div className="space-y-4">
            {academicSkills.map((skill, i) => (
              <div key={i} className="flex items-center p-4 bg-gray-700 text-white rounded-xl shadow-md hover:scale-105 transition-transform opacity-80">
                <div className="mr-4 text-2xl">{skill.icon}</div>
                <span className="font-semibold text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
