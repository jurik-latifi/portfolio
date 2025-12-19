import React from "react";
import profilePic from "../assets/profile.jpeg"; // replace with your profile image
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary text-text px-4 sm:px-6 lg:px-0">
      <h2 className="text-4xl font-bold text-center mb-16 text-accent1">
        About Me & Contact
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - About Me */}
        <div className="space-y-6">
          {/* Profile Image */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent1 shadow-lg mx-auto md:mx-0">
            <img
              src={profilePic}
              alt="Jurik Latifi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Text */}
          <div className="space-y-4 text-center md:text-left">
            <p className="text-lg text-white/90">
              I am a{" "}
              <span className="font-bold text-accent1">
                Computer Science & Engineering student at UBT
              </span>{" "}
              with a passion for building modern web applications.
            </p>
            <p className="text-lg text-white/90">
              I have{" "}
              <span className="font-bold text-accent2">
                2+ years of experience
              </span>{" "}
              in React, Node.js, Next.js, and full-stack development.
            </p>
            <p className="text-lg text-white/90">
              Internship:{" "}
              <span className="font-semibold text-accent1">
                Pabau Software Clinic
              </span>{" "}
              - Software Engineer
            </p>
            <p className="text-lg text-white/90">
              Training & Internship:{" "}
              <span className="font-semibold text-accent1">ROI</span> - 6 months
            </p>
            <p className="text-lg text-white/90">
              Hobbies: Football, exploring tech trends, and continuous learning.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <div className="bg-accent1/20 text-accent1 font-bold px-6 py-3 rounded-lg shadow hover:shadow-lg transition">
              2+ Years Experience
            </div>
            <div className="bg-accent2/20 text-accent2 font-bold px-6 py-3 rounded-lg shadow hover:shadow-lg transition">
              10+ Projects
            </div>
          </div>
        </div>

        {/* Right Column - Contact Me */}
        <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col items-center md:items-start space-y-6">
          <h3 className="text-3xl font-bold text-accent2 mb-4">Contact Me</h3>
          <p className="text-white/90">
            Feel free to reach out for projects, collaborations, or inquiries.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4">
              <FaGithub className="text-2xl text-white/90 hover:text-accent1 transition-colors" />
              <a
                href="https://github.com/jurik-latifi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-accent1 transition-colors"
              >
                GitHub: jurik-latifi
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl text-white/90 hover:text-accent2 transition-colors" />
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-accent2 transition-colors"
              >
                LinkedIn: juriklatifi
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-2xl text-green-500 hover:text-green-400 transition-colors" />
              <a
                href="https://wa.me/+38343929039"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-green-400 transition-colors"
              >
                WhatsApp: +38343929039
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-yellow-400 hover:text-yellow-300 transition-colors" />
              <a
                href="mailto:jurik.latifi@gmail.com"
                className="text-white/90 hover:text-yellow-300 transition-colors"
              >
                Email: jurik.latifi@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
