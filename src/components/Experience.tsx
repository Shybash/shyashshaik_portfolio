"use client";

import { motion } from "framer-motion";
import { Briefcase, Server } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Minfy Technologies, Hyderabad",
      period: "October 2025 – Present",
      type: "Full-Time",
      icon: <Server className="h-4.5 w-4.5 text-blue-400" />,
      points: [
        "Design and maintain core Node.js/Express.js microservices deployed inside AWS (ECS/Fargate) containerized environments.",
        "Refactor database queries and connections in MongoDB to optimize speed, reduce latency, and implement efficient caching strategies.",
        "Authored custom API Gateway middleware implementing token verification (JWT) and Role-Based Access Control filters to secure server endpoints.",
        "Assisted in configuring static asset delivery routes using AWS S3 and CloudFront CDN, reducing client request load times."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Minfy Technologies, Hyderabad",
      period: "April 2025 – September 2025",
      type: "Internship",
      icon: <Briefcase className="h-4.5 w-4.5 text-purple-400" />,
      points: [
        "Developed modular utility libraries and helper routes in Express.js/Node.js, helping reduce local system code complexity.",
        "Participated in agile team environments, collaborating in sprint planning sessions, daily standups, and code review processes."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-8 border-b border-border-subtle bg-transparent relative">
      <div className="absolute inset-0 grid-bg-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16 text-left">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">{"// PROFESSIONAL HISTORY"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Work Experience</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mt-2" />
        </div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 text-left">
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              
              {/* Timeline dot */}
              <div className="absolute -left-[50px] md:-left-[66px] top-1.5 bg-zinc-950/80 p-2 rounded-full border border-white/5 shadow-[0_0_10px_rgba(59,130,246,0.1)] z-10 backdrop-blur-sm">
                {exp.icon}
              </div>

              {/* Card Container */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0a0c24]/30 border border-white/5 p-6 md:p-8 rounded-xl shadow-lg relative overflow-hidden backdrop-blur-md"
              >
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">{exp.role}</h3>
                    <span className="font-mono text-xs text-zinc-400">{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <span className="font-mono text-[9px] bg-zinc-950/60 border border-white/5 text-zinc-455 px-2.5 py-1 rounded font-bold">
                      {exp.period}
                    </span>
                    <span className="font-mono text-[9px] bg-blue-900/20 border border-blue-900/30 text-blue-400 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4 font-sans text-sm text-zinc-450">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-450 mt-2 shrink-0 animate-pulse" />
                      <span className="leading-relaxed text-zinc-350">{pt}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
