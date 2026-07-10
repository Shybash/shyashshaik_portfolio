"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import Tilt from "@/components/Tilt";

interface Project {
  name: string;
  desc: string;
  image: string;
  category: string;
  links: {
    view: string;
    code: string;
  };
}

const filterTabs = [
  { key: "*", label: "All Projects" },
  { key: "agentic", label: "Agentic AI" },
  { key: "mern", label: "MERN Stack" },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState("*");

  // Visibility change tab title handler
  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.getElementById("favicon") as HTMLLinkElement;
      if (document.visibilityState === "visible") {
        document.title = "Projects | Shaik Shybash";
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

  // Fetch Projects data
  useEffect(() => {
    fetch("/projects/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (filter === "*") return true;
    return project.category === filter;
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="py-16 px-4 md:px-8 relative">
          <div className="absolute inset-0 grid-bg-pattern opacity-10 pointer-events-none" />

          <div className="max-w-7xl w-full mx-auto relative z-10">
            {/* Header */}
            <div className="flex flex-col space-y-2 mb-12 text-left">
              <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">
                {"// ALL PROJECTS"}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                Projects Made
              </h1>
              <div className="h-1 w-20 bg-blue-500 rounded-full mt-2" />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-12">
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer border ${
                    filter === tab.key
                      ? "bg-indigo-600/20 border-indigo-500/30 text-indigo-400"
                      : "bg-zinc-950/40 border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-900/40"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    layout
                  >
                    <Tilt className="h-full">
                      <div className="bg-[#0d0d12]/50 border border-white/5 rounded-xl overflow-hidden shadow-lg backdrop-blur-md h-full flex flex-col spotlight-card spotlight-card-blue">
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden bg-zinc-950">
                          <img
                            draggable="false"
                            src={`/assets/images/projects/${project.image}.png`}
                            alt={project.name}
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                          />
                          <div className="absolute top-3 right-3">
                            <span className="font-mono text-[9px] bg-zinc-950/80 backdrop-blur-sm border border-white/10 text-zinc-300 px-2 py-1 rounded uppercase tracking-wider font-bold">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-lg font-bold text-white mb-2 font-sans">
                            {project.name}
                          </h3>
                          <p className="text-xs text-zinc-400 leading-relaxed font-sans flex-grow line-clamp-3">
                            {project.desc}
                          </p>

                          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/5">
                            <a
                              href={project.links.view}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-all cursor-pointer"
                            >
                              <ExternalLink className="h-3 w-3" />
                              <span>View</span>
                            </a>
                            <a
                              href={project.links.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-zinc-950/60 border border-white/5 text-zinc-300 text-xs font-bold hover:text-white hover:bg-zinc-900/40 transition-all cursor-pointer"
                            >
                              <Github className="h-3 w-3" />
                              <span>Code</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Back Button */}
            <div className="mt-12 flex justify-center">
              <Link
                href="/#projects"
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
