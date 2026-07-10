"use client";

import React from "react";
import { ArrowRight, CheckCircle, Cpu, Shield, Layers, Database, Brain, Zap } from "lucide-react";
import { Github } from "@/components/icons";
import Tilt from "@/components/Tilt";


export default function Projects() {


  const additionalProjects = [
    {
      title: "Dynamic Documentation Platform",
      role: "Full-Stack Developer",
      date: "Dec 2025",
      desc: "A collaborative real-time editor workspace using Socket.io and operational transformation logic to sync document edits instantly across clients.",
      challenges: "Managing state drift on disconnected sockets, rendering real-time cursor offsets, and building secure Role-Based Access Control filters.",
      scaling: "Optimized node connection handshakes, reducing memory overhead per concurrent user by 40% and supporting up to 50 active writers per document.",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js"],
      github: "https://github.com/Shybash",
      spotlightClass: "spotlight-card-blue"
    },
    {
      title: "Cortex: Production RAG API",
      role: "AI Backend Engineer",
      date: "Feb 2026",
      desc: "A production-grade multi-tenant RAG API with hybrid search (dense vector + BM25) and cross-encoder re-ranking, serving domain-specific Q&A at enterprise scale.",
      challenges: "Achieving accurate retrieval across 500K+ documents with mixed document types, enforcing tenant data isolation at the retrieval layer without query-time overhead.",
      scaling: "Two-stage retrieval pipeline (Pgvector + cross-encoder re-ranking) improved answer relevance by 34%; RBAC-enforced namespace isolation supports 50+ concurrent tenants.",
      tech: ["Python", "FastAPI", "LangChain", "Pgvector", "PostgreSQL", "Redis", "AWS"],
      github: "https://github.com/Shybash",
      spotlightClass: "spotlight-card-blue"
    },
    {
      title: "Employee Management API Engine",
      role: "Backend Developer",
      date: "July 2023",
      desc: "An enterprise-grade directory management REST API system, providing secure authorization scopes and automated data replication routes.",
      challenges: "Reducing API lookup time on deep-nested organization charts and optimizing relational tables queries.",
      scaling: "Configured index lookup paths on MySQL foreign-key tables, reducing search query latency from 320ms to 14ms on deep employee records lists.",
      tech: ["Node.js", "Express.js", "MySQL", "JWT", "REST APIs"],
      github: "https://github.com/Shybash",
      spotlightClass: "spotlight-card-blue"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-8 border-b border-border-subtle bg-transparent">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16 text-left">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">{"// RECENT RELEASES"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">System Implementations & Projects</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mt-2" />
        </div>

        {/* Flagship Project - AutoAgent Premium Portfolio Card */}
        <Tilt className="mb-16">
          <div 
            className="bg-[#0d0d12]/50 border border-white/5 rounded-xl overflow-hidden shadow-2xl spotlight-card spotlight-card-blue p-6 md:p-8 backdrop-blur-md w-full h-full"
          >
            {/* Banner */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6 mb-6">
              <div className="text-left">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">🤖 FLAGSHIP AI SYSTEM</span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">PRODUCTION READY</span>
                  <span className="text-zinc-500 font-mono text-[10px]">V2.0.0-PROD</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white font-sans">AutoAgent: Autonomous Multi-Tool AI Agent</h3>
                <p className="text-indigo-400/70 font-mono text-[10px] mt-1">Stateful ReAct Loop Engine · LangGraph · Dual-Layer Memory · Real-Time Streaming</p>
              </div>
              
              <div className="flex items-center space-x-3 shrink-0">
                <a href="https://github.com/Shybash" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-zinc-950/60 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-900/40 transition-colors cursor-pointer">
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a href="https://github.com/Shybash" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1.5 px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-colors cursor-pointer">
                  <span>View Architecture</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Description Column */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                  Architected a production-grade autonomous AI agent using <span className="text-indigo-400 font-semibold">LangGraph</span> with a stateful <span className="text-blue-400 font-semibold">ReAct (Reason + Act) loop engine</span> — enabling autonomous planning, multi-tool execution (web search, SQL executor, REST API caller, code interpreter), and self-correction on failed steps without human intervention.
                </p>

                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-zinc-500 block uppercase font-bold">Core Engineering Achievements:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-lg flex items-start space-x-3">
                      <Brain className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                      <div className="text-left font-sans text-xs">
                        <strong className="text-zinc-200 block mb-0.5">Dual-Layer Memory</strong>
                        <span className="text-zinc-400">Short-term context buffers + Pgvector long-term semantic storage with &lt;200ms cross-session recall latency.</span>
                      </div>
                    </div>

                    <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-lg flex items-start space-x-3">
                      <Shield className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <div className="text-left font-sans text-xs">
                        <strong className="text-zinc-200 block mb-0.5">Hallucination Guardrails</strong>
                        <span className="text-zinc-400">Pydantic output validation + auto-retry logic reduced agent failure rate by 38% over baseline single-pass LLM calls.</span>
                      </div>
                    </div>

                    <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-lg flex items-start space-x-3">
                      <Zap className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div className="text-left font-sans text-xs">
                        <strong className="text-zinc-200 block mb-0.5">Real-Time Streaming</strong>
                        <span className="text-zinc-400">FastAPI WebSocket endpoint streams thought-chain tokens + tool execution traces live to React monitoring dashboard.</span>
                      </div>
                    </div>

                    <div className="bg-zinc-950/40 border border-white/5 p-4 rounded-lg flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="text-left font-sans text-xs">
                        <strong className="text-zinc-200 block mb-0.5">Cost & Safety Controls</strong>
                        <span className="text-zinc-400">Token budget enforcement per session + max-step limits prevent runaway agent loops and API cost overruns.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-5">
                  <span className="font-mono text-[10px] text-zinc-500 block uppercase font-bold mb-3">System Tech Stack:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "LangGraph", "LangChain", "FastAPI", "Pgvector", "Redis", "WebSockets", "React", "AWS ECS", "Docker"].map((t, i) => (
                      <span key={i} className="font-mono text-[9px] bg-zinc-950/60 border border-white/5 text-zinc-300 px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Spec Sheet Column */}
              <div className="lg:col-span-5 bg-zinc-950/40 border border-white/5 rounded-lg p-5 space-y-4">
                <span className="font-mono text-[9px] text-zinc-500 block uppercase font-bold">{"// AGENT_ARCHITECTURE_SPECS"}</span>
                
                <div className="space-y-3 font-mono text-xs text-zinc-300">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-zinc-500 flex items-center space-x-1.5">
                      <Brain className="h-3.5 w-3.5" />
                      <span>AGENT ENGINE</span>
                    </span>
                    <span className="text-indigo-300">LangGraph ReAct Loop</span>
                  </div>

                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-zinc-500 flex items-center space-x-1.5">
                      <Layers className="h-3.5 w-3.5" />
                      <span>TOOL REGISTRY</span>
                    </span>
                    <span className="text-white">4 Live Tools + Sandbox</span>
                  </div>

                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-zinc-500 flex items-center space-x-1.5">
                      <Database className="h-3.5 w-3.5" />
                      <span>MEMORY STORE</span>
                    </span>
                    <span className="text-white">Pgvector + Redis Sessions</span>
                  </div>

                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-zinc-500 flex items-center space-x-1.5">
                      <Cpu className="h-3.5 w-3.5" />
                      <span>CONCURRENCY</span>
                    </span>
                    <span className="text-white">50+ Async Agent Sessions</span>
                  </div>

                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-zinc-500 flex items-center space-x-1.5">
                      <Shield className="h-3.5 w-3.5" />
                      <span>GUARDRAILS</span>
                    </span>
                    <span className="text-white">Pydantic + Cost Limits</span>
                  </div>

                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-zinc-500 flex items-center space-x-1.5">
                      <Zap className="h-3.5 w-3.5" />
                      <span>DEPLOYMENT</span>
                    </span>
                    <span className="text-white">AWS ECS / Fargate</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-zinc-950/40 border border-white/5 p-3 rounded flex flex-col">
                    <span className="text-zinc-500 font-mono text-[9px] uppercase">Memory Recall</span>
                    <span className="text-indigo-400 font-extrabold text-sm">&lt; 200ms</span>
                  </div>
                  <div className="bg-zinc-950/40 border border-white/5 p-3 rounded flex flex-col">
                    <span className="text-zinc-500 font-mono text-[9px] uppercase">Failure Rate ↓</span>
                    <span className="text-emerald-400 font-extrabold text-sm">−38%</span>
                  </div>
                </div>

                <div className="bg-zinc-950/40 border border-white/5 p-3.5 rounded flex items-center justify-between">
                  <div className="text-left font-mono text-[10px] space-y-0.5">
                    <span className="text-zinc-500 block uppercase">First Token Latency</span>
                    <span className="text-emerald-400 font-extrabold text-sm block">&lt; 500ms</span>
                  </div>
                  <CheckCircle className="h-5 w-5 text-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </Tilt>

        {/* Grid for Additional Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalProjects.map((proj, idx) => (
            <Tilt key={idx} className="flex flex-col">
              <div 
                className={`bg-[#0d0d12]/50 border border-white/5 rounded-xl p-6 flex flex-col justify-between shadow-lg relative overflow-hidden spotlight-card ${proj.spotlightClass} backdrop-blur-md h-full w-full`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] text-zinc-500">{proj.date}</span>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded bg-zinc-950/60 border border-white/5 text-zinc-500 hover:text-white transition-colors cursor-pointer">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <h4 className="text-lg font-bold text-white font-sans">{proj.title}</h4>
                    <span className="font-mono text-[9px] bg-zinc-950/60 text-blue-400 border border-white/5 px-2 py-0.5 rounded uppercase block w-fit font-bold">
                      {proj.role}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans text-left">
                    {proj.desc}
                  </p>

                  <div className="space-y-2 border-t border-white/5 pt-3 text-left">
                    <div>
                      <span className="font-mono text-[9px] text-zinc-500 block uppercase font-bold">Architecture Bottlenecks:</span>
                      <span className="text-[11px] text-zinc-400 font-sans leading-tight block">{proj.challenges}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-emerald-400 block uppercase font-bold">Systems Performance Gain:</span>
                      <span className="text-[11px] text-emerald-500/90 font-sans leading-tight block">{proj.scaling}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6 flex flex-wrap gap-1.5">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="font-mono text-[9px] bg-zinc-950/60 border border-white/5 text-zinc-400 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
}
