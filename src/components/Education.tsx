"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const educations = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Keshav Memorial Institute of Technology",
      period: "2022 – 2025",
      grade: "GPA: 7.9 / 10",
      icon: <GraduationCap className="h-4.5 w-4.5 text-emerald-400" />,
      points: [
        "Specialized in Software Engineering, Database Systems, Computer Networks, and Data Structures.",
        "Built course projects including a real-time club registration portal and directories API services.",
        "Gained hands-on experience in database schema modeling, SQL query optimizations, and web sockets."
      ]
    },
    {
      degree: "Intermediate Education (XII / MPC)",
      institution: "Board of Intermediate Education",
      period: "2019 – 2021",
      grade: "Completed",
      icon: <GraduationCap className="h-4.5 w-4.5 text-zinc-400" />,
      points: [
        "Major subjects: Mathematics, Physics, and Chemistry.",
        "Built foundational analytical logic and problem-solving structures."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-4 md:px-8 border-b border-border-subtle bg-transparent relative">
      <div className="absolute inset-0 grid-bg-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16 text-left">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">{"// ACADEMIC TIMELINE"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Education Details</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mt-2" />
        </div>

        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 text-left">
          
          {educations.map((edu, idx) => (
            <div key={idx} className="relative">
              
              {/* Timeline dot */}
              <div className="absolute -left-[50px] md:-left-[66px] top-1.5 bg-zinc-950/80 p-2 rounded-full border border-white/5 shadow-[0_0_10px_rgba(16,185,129,0.1)] z-10 backdrop-blur-sm">
                {edu.icon}
              </div>

              {/* Card Container */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0d0d12]/50 border border-white/5 p-6 md:p-8 rounded-xl shadow-lg relative overflow-hidden backdrop-blur-md"
              >
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-6 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">{edu.degree}</h3>
                    <span className="font-mono text-xs text-zinc-400">{edu.institution}</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <span className="font-mono text-[9px] bg-zinc-950/60 border border-white/5 text-zinc-400 px-2.5 py-1 rounded font-bold">
                      {edu.period}
                    </span>
                    <span className="font-mono text-[9px] bg-emerald-900/20 border border-emerald-900/30 text-emerald-400 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4 font-sans text-sm text-zinc-400">
                  {edu.points.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 animate-pulse" />
                      <span className="leading-relaxed text-zinc-300">{pt}</span>
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
