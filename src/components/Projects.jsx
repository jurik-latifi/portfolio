import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    tech: ["React", "Tailwind"],
    link: "https://github.com/jurik-latifi/portfolio",
  },
  {
    title: "E-commerce Site",
    tech: ["React"],
    link: "https://github.com/florentimeri/shpiragu",
  },
  {
    title: "EXit Poll",
    tech: ["React, .net C#"],
    link: "https://github.com/ademademii/ExitPoll",
  },
  {
    title: "Tic Tac Toe Game",
    tech: ["React#"],
    link: "https://github.com/juriklatifi/tic-tac-toe-react",
  },
  {
    title: "Wox Training App",
    tech: ["React, Express js"],
    link: "https://github.com/juriklatifi/wox-training-app",
  },
  {
    title: "Parking-Prishtina",
    tech: ["Html and Css"],
    link: "https://github.com/juriklatifi/Parking-Prishtina",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary text-text px-4 sm:px-6 lg:px-0">
      <h2 className="text-4xl font-bold text-center mb-12 text-accent1">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative bg-card rounded-xl p-6 shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity rounded-xl"></div>

            {/* Project Title */}
            <h3 className="text-2xl font-bold mb-4 z-10 relative text-accent2">
              {project.title}
            </h3>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-4 z-10 relative">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-accent1 text-primary text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 border border-accent2 text-accent2 font-semibold rounded-lg hover:bg-accent2 hover:text-primary transition z-10 relative"
            >
              <FaGithub className="text-lg" /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
