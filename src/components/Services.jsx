import React from "react";
import { FaCode, FaMobileAlt, FaLaptopCode, FaTools, FaDatabase, FaLightbulb } from "react-icons/fa";

const services = [
  { icon: <FaCode />, title: "Web Development", desc: "React, Next.js, Node.js full stack solutions" },
  { icon: <FaMobileAlt />, title: "Responsive Design", desc: "Optimized for all devices and screen sizes" },
  { icon: <FaLaptopCode />, title: "Freelance Development", desc: "CMS integration and custom website projects" },
  { icon: <FaTools />, title: "Maintenance & Upgrades", desc: "Keep your website running smoothly and up-to-date" },
  { icon: <FaDatabase />, title: "Custom Web Apps & APIs", desc: "Build and integrate powerful web applications and APIs" },
  { icon: <FaLightbulb />, title: "Consulting & Guidance", desc: "Technical advice, planning, and strategy for web projects" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-primary text-text px-4 sm:px-6 lg:px-0">
      <h2 className="text-4xl font-bold text-center mb-16 text-accent1">Services I Offer</h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="group relative bg-card rounded-xl p-6 shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 text-accent2 group-hover:text-accent1 transition-colors">
              {service.icon}
            </div>
            {/* Title */}
            <h3 className="text-2xl font-bold mb-2 text-accent1">{service.title}</h3>
            {/* Description */}
            <p className="text-white/80">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
