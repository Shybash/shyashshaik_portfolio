"use client";

import React from "react";
import Tilt from "@/components/Tilt";
import {
  NodeJsIcon,
  ExpressIcon,
  MongodbIcon,
  PostgresqlIcon,
  RedisIcon,
  DockerIcon,
  AwsIcon,
  GithubIcon,
  TypescriptIcon,
  WebsocketsIcon,
  ReactIcon,
  NextjsIcon
} from "@/components/TechIcons";

export default function Skills() {
  const skillsData = [
    {
      name: "Node.js",
      group: "BACKEND",
      label: "Core Service Engine",
      desc: "Building secure, high-throughput microservices and optimized server runtimes.",
      icon: <NodeJsIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "Express.js",
      group: "REST API",
      label: "Route Architecture",
      desc: "Structuring clean endpoints, middleware integrations, JWT auth, and RBAC filters.",
      icon: <ExpressIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "MongoDB",
      group: "DATABASE",
      label: "NoSQL Document Store",
      desc: "Designing flexible schemas, aggregating collections, and optimizing query indexing.",
      icon: <MongodbIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "PostgreSQL",
      group: "DATABASE",
      label: "Relational Engine",
      desc: "Structuring database schemas, managing keys, and tuning execution efficiency.",
      icon: <PostgresqlIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "Redis",
      group: "CACHE & QUEUE",
      label: "In-Memory Hub",
      desc: "Offloading intensive tasks, scheduling queues, and managing fast token cache layers.",
      icon: <RedisIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "Docker",
      group: "CONTAINERS",
      label: "Isolated Environments",
      desc: "Standardizing environments across development, testing, and production stages.",
      icon: <DockerIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "AWS",
      group: "CLOUD INFRA",
      label: "Amazon Web Services",
      desc: "Operating within ECS Fargate, S3 storage buckets, and CloudFront CDN paths.",
      icon: <AwsIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "GitHub",
      group: "VERSIONING",
      label: "Git & Actions",
      desc: "Coordinating branch merges, review flows, and automated deployment integrations.",
      icon: <GithubIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "TypeScript",
      group: "LANGUAGE",
      label: "Type-Safe Logic",
      desc: "Writing scalable client-server logic with strict compile-time types.",
      icon: <TypescriptIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "WebSockets",
      group: "REALTIME",
      label: "Bidirectional Sync",
      desc: "Constructing persistent connection sockets and real-time data events.",
      icon: <WebsocketsIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "React.js",
      group: "FRONTEND",
      label: "UI Library",
      desc: "Composing reusable component matrices, custom hooks, and layout shells.",
      icon: <ReactIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    },
    {
      name: "Next.js",
      group: "FULLSTACK",
      label: "Server Framework",
      desc: "Architecting lightning-fast web pages, API routes, and Tailwind layouts.",
      icon: <NextjsIcon className="w-10 h-10 shrink-0" />,
      spotlightClass: "spotlight-card-blue"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 border-b border-border-subtle bg-transparent relative">
      <div className="absolute inset-0 grid-bg-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16 text-left">
          <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">{"// TECH STACK RESOLUTION"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Technical Skills & Ecosystem</h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full mt-2" />
        </div>

        {/* 12 Skills Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, idx) => (
            <Tilt 
              key={idx} 
              className={`bg-[#0d0d12]/50 border border-white/5 rounded-xl p-5 backdrop-blur-md spotlight-card ${skill.spotlightClass} flex flex-col justify-between h-[230px]`}
            >
              <div>
                {/* Header: Icon + Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded bg-zinc-950/60 border border-white/5">
                    {skill.icon}
                  </div>
                  <span className="font-mono text-[9px] bg-zinc-950/60 border border-white/5 text-zinc-400 px-2 py-0.5 rounded-full font-bold tracking-wider">
                    {skill.group}
                  </span>
                </div>

                {/* Body Details */}
                <div className="text-left space-y-1">
                  <h3 className="font-sans text-base font-extrabold text-white leading-none">{skill.name}</h3>
                  <p className="font-mono text-[10px] text-zinc-500 font-bold uppercase">{skill.label}</p>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed pt-1.5 line-clamp-3">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
}
