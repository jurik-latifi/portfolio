import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Layered Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#21e6c1] to-[#ff7f50] animate-gradient-x"></div>
      <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay */}

      {/* Animated Floating Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-accent1 rounded-full opacity-20 animate-ping-slow top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-accent2 rounded-full opacity-15 animate-pulse-slow bottom-20 right-20"></div>
        <div className="absolute w-56 h-56 bg-accent1 rounded-full opacity-25 animate-spin-slow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-32 h-32 bg-white/10 rounded-full animate-bounce-slow top-1/4 right-1/4"></div>
        <div className="absolute w-24 h-24 bg-white/5 rounded-full animate-bounce-slow bottom-1/3 left-1/3"></div>
      </div>

      {/* Hero Text */}
      <h1 className="relative text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent1 via-accent2 to-yellow-400 drop-shadow-2xl">
        Hi, I'm Jurik Latifi
      </h1>
      <p className="relative text-xl md:text-2xl lg:text-3xl mb-4 text-white/90 drop-shadow-md">
        Full Stack Developer | React, Node.js, Next.js
      </p>
      <p className="relative text-md md:text-lg mb-8 text-white/70 max-w-xl drop-shadow-md">
        2+ years of experience building modern web applications, creating
        responsive and dynamic websites, and developing full-stack solutions.
      </p>

      {/* LinkedIn Button with Profile Image */}
      <div className="relative flex flex-col md:flex-row items-center gap-4">
        <a
          href="https://www.linkedin.com/in/jurik-latifi-43939a266/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGldeN9-op3cg/profile-displayphoto-crop_800_800/B56ZsxAx7MIEAM-/0/1766053848941?e=1767830400&v=beta&t=FngpsLNO_u28PeD9V4zNjG0fLGJIT2LyErVagrZs6Dk"
            alt="LinkedIn Profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          Visit my LinkedIn
        </a>
        <a
          href="#projects"
          className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl shadow-lg hover:bg-white hover:text-primary transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
        >
          See My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
