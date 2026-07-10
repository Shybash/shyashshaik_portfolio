"use client";

import { Server, Database, Cpu, ShieldCheck, Mail, MapPin, User, GraduationCap, Download } from "lucide-react";
import Tilt from "@/components/Tilt";


export default function About() {


  const principles = [
    {
      icon: <Server className="h-5 w-5 text-indigo-400" />,
      title: "API Design & Optimization",
      desc: "Building clean, RESTful APIs using Node.js and Express. Refactoring routes and middleware to ensure swift response times and clean payload structures.",
      spotlightClass: "spotlight-card-blue"
    },
    {
      icon: <Cpu className="h-5 w-5 text-indigo-400" />,
      title: "Asynchronous Workflows",
      desc: "Managing queues and background processing with Redis. Offloading intensive execution steps to keep user-facing APIs responsive.",
      spotlightClass: "spotlight-card-blue"
    },
    {
      icon: <Database className="h-5 w-5 text-indigo-400" />,
      title: "Database Modeling",
      desc: "Designing and optimizing schema structures across MongoDB and SQL databases. Writing clean queries, indexing keys, and implementing caching logic.",
      spotlightClass: "spotlight-card-blue"
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-indigo-400" />,
      title: "Security & Reliability",
      desc: "Integrating secure user authentication (JWT, role-based access), implementing request validations, and managing robust error handling patterns.",
      spotlightClass: "spotlight-card-blue"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 border-b border-border-subtle bg-transparent relative">
      {/* Subtle backdrop grid */}
      <div className="absolute inset-0 grid-bg-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16 text-left">
          <span className="font-mono text-xs text-blue-455 tracking-widest uppercase">{"// ABOUT ME"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Biography & Core Focus</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Biography */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <p className="text-zinc-300 text-lg leading-relaxed font-sans text-left">
                I am an Associate Software Engineer focused on backend development, designing scalable microservices, and implementing reliable database integrations. I believe that writing good code is about readability, structure, and solving real business bottlenecks.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed font-sans text-left">
                Currently at Minfy Technologies, I design and maintain Node.js services inside AWS container environments, optimize database performance, and build secure authentication middleware. I am constantly expanding my knowledge in system architecture, cloud deployment pipelines, and real-time server communications.
              </p>
            </div>

            <div className="pt-2 text-left">
              <a 
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs px-5 py-3 rounded-lg shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {principles.map((p, idx) => (
                <Tilt key={idx} className="flex flex-col">
                  <div className={`bg-[#0d0d12]/50 backdrop-blur-md border border-white/5 p-5 rounded-lg flex flex-col space-y-3 shadow-md spotlight-card ${p.spotlightClass} text-left h-full w-full`}>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded bg-zinc-950/60 border border-white/5">
                        {p.icon}
                      </div>
                      <h3 className="font-mono text-sm text-white font-bold">{p.title}</h3>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">{p.desc}</p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>

          {/* Right Column: Personal Specifications Grid (Jigar Sable Template Layout) */}
          <div className="lg:col-span-5 flex flex-col">
            <Tilt className="w-full h-full flex flex-col">
              <div 
                className="bg-[#0d0d12]/50 backdrop-blur-md border border-white/5 rounded-xl p-6 shadow-xl relative overflow-hidden spotlight-card spotlight-card-blue flex flex-col justify-between h-full min-h-[380px] text-left w-full"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 pb-4 border-b border-white/5">
                    <User className="h-4.5 w-4.5 text-indigo-400" />
                    <h3 className="font-mono text-xs text-white font-bold uppercase tracking-wider">Personal Specs</h3>
                  </div>

                  <div className="space-y-5 font-mono text-xs text-zinc-300">
                    <div className="flex items-center space-x-4 border-b border-white/5 pb-3">
                      <User className="h-4.5 w-4.5 text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">FULL NAME</span>
                        <span className="text-zinc-200 font-sans font-bold">Shaik Shybash</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 border-b border-white/5 pb-3">
                      <Cpu className="h-4.5 w-4.5 text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">ROLE</span>
                        <span className="text-zinc-200 font-sans font-bold">Associate Software Engineer</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 border-b border-white/5 pb-3">
                      <Mail className="h-4.5 w-4.5 text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">EMAIL ADDRESS</span>
                        <span className="text-zinc-200 font-sans font-bold">shybashshaik@gmail.com</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 border-b border-white/5 pb-3">
                      <MapPin className="h-4.5 w-4.5 text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">LOCATION</span>
                        <span className="text-zinc-200 font-sans font-bold">Hyderabad, India</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 border-b border-white/5 pb-3">
                      <GraduationCap className="h-4.5 w-4.5 text-zinc-500 shrink-0" />
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase font-bold">ACADEMICS</span>
                        <span className="text-zinc-200 font-sans font-bold">B.Tech in CSE (GPA: 7.9)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6">
                  <span className="font-mono text-[10px] text-zinc-500">Node.js // AWS // Databases</span>
                </div>
              </div>
            </Tilt>
          </div>

        </div>

      </div>
    </section>
  );
}
