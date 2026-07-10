"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Server, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function ExperiencePage() {
  // Visibility change tab title handler
  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.getElementById("favicon") as HTMLLinkElement;
      if (document.visibilityState === "visible") {
        document.title = "Experience | Shaik Shybash";
        if (favicon) favicon.href = "/assets/images/favicon.png";
      } else {
        document.title = "Come Back To Portfolio";
        if (favicon) favicon.href = "/assets/images/favhand.png";
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Minfy Technologies, Hyderabad",
      period: "Oct 2025 – Present",
      type: "Full-Time",
      icon: <Server className="h-5 w-5 text-blue-400" />,
      points: [
        "Develop and maintain scalable microservices using Node.js, Express.js, and AWS",
        "Collaborate with cross-functional teams to deliver features using Agile methodologies",
        "Implement RESTful APIs following industry best practices, improving maintainability",
        "Participate in code reviews and contribute to team knowledge sharing, enhancing code quality",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Minfy Technologies, Hyderabad",
      period: "Apr 2025 – Sep 2025",
      type: "Internship",
      icon: <Briefcase className="h-5 w-5 text-purple-400" />,
      points: [
        "Built modular web applications using JavaScript, Node.js, and Express.js",
        "Participated in daily stand-ups, sprint planning, and retrospectives following Scrum methodology",
        "Contributed to code reviews and technical documentation, improving productivity by 15%",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="py-16 px-4 md:px-8 relative">
          <div className="absolute inset-0 grid-bg-pattern opacity-10 pointer-events-none" />

          <div className="max-w-4xl w-full mx-auto relative z-10">
            {/* Header */}
            <div className="flex flex-col space-y-2 mb-16 text-left">
              <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
                {"// PROFESSIONAL HISTORY"}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Experience Timeline
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded-full mt-2" />
              <p className="text-zinc-400 text-sm font-sans mt-4 max-w-lg italic">
                &quot;Every experience in your life is being orchestrated to
                teach you something you need to know to move forward.&quot;
              </p>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12 text-left">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[50px] md:-left-[66px] top-1.5 bg-zinc-950/80 p-2 rounded-full border border-white/5 shadow-[0_0_10px_rgba(59,130,246,0.1)] z-10 backdrop-blur-sm">
                    {exp.icon}
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-[#0d0d12]/50 border border-white/5 p-6 md:p-8 rounded-xl shadow-lg relative overflow-hidden backdrop-blur-md"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-6 border-b border-white/5 pb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white font-sans">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-xs text-zinc-400">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2.5">
                        <span className="font-mono text-[9px] bg-zinc-950/60 border border-white/5 text-zinc-400 px-2.5 py-1 rounded font-bold">
                          {exp.period}
                        </span>
                        <span className="font-mono text-[9px] bg-blue-900/20 border border-blue-900/30 text-blue-400 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4 font-sans text-sm text-zinc-400">
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-2 shrink-0 animate-pulse" />
                          <span className="leading-relaxed text-zinc-300">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Back Button */}
            <div className="mt-12 flex justify-center">
              <Link
                href="/#experience"
                className="inline-flex items-center space-x-2 px-5 py-3 bg-zinc-950/60 border border-white/5 text-zinc-300 hover:text-white hover:bg-zinc-900/40 hover:border-white/10 rounded-lg transition-all font-mono text-xs"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
