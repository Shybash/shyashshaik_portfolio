"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, FileText, Code2, Play, Check, Loader2 } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Tilt from "@/components/Tilt";

const phrases = [
  "scalable backend systems.",
  "clean API architectures.",
  "efficient event pipelines.",
  "robust database queries."
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<"json" | "ts" | "yaml">("json");
  const [runState, setRunState] = useState<"idle" | "running" | "success">("idle");


  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, charIdx - 1));
        setCharIdx(prev => prev - 1);
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, charIdx + 1));
        setCharIdx(prev => prev + 1);
      }, 70);
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setPhraseIdx(prev => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx]);

  const handleRunSpec = () => {
    if (runState !== "idle") return;
    setRunState("running");
    setTimeout(() => {
      setRunState("success");
    }, 1500);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center py-24 px-4 md:px-8 overflow-hidden border-b border-border-subtle bg-transparent">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-bg-pattern pointer-events-none opacity-20 z-0" />
      
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left: Headline & Introduction */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-zinc-950 border border-zinc-900 rounded-full py-1.5 px-3.5 w-fit"
          >
            <Code2 className="h-3.5 w-3.5 text-blue-400" />
            <span className="font-mono text-xs text-zinc-400">Associate Software Engineer</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Shaik Shybash</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-h-[2.5rem] flex items-center"
          >
            <p className="font-mono text-lg text-zinc-400">
              I build <span className="text-white border-r-2 border-blue-400 animate-cursor-blink pr-1 font-semibold">{typedText}</span>
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans"
          >
            I specialize in Node.js, TypeScript, and backend architectures. With 1 year of experience at Minfy Technologies, I design scalable microservices, manage database integrity, and construct secure API pipelines.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-zinc-200 transition-all shadow active:scale-98 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a 
              href="https://github.com/Shybash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-zinc-950 border border-zinc-900 text-zinc-300 text-sm px-4 py-2.5 rounded-lg hover:text-white hover:bg-zinc-900 transition-all active:scale-98"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a 
              href="https://linkedin.com/in/shybashshaik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-zinc-950 border border-zinc-900 text-zinc-300 text-sm px-4 py-2.5 rounded-lg hover:text-white hover:bg-zinc-900 transition-all active:scale-98"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex items-center space-x-2 bg-zinc-950 border border-zinc-900 text-zinc-300 text-sm px-4 py-2.5 rounded-lg hover:text-white hover:bg-zinc-900 transition-all active:scale-98"
            >
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </motion.div>
          
        </div>

        {/* Right: Interactive Editor Mock Card */}
        <Tilt className="lg:col-span-5 relative w-full flex flex-col">
          <div className="w-full bg-[#09090b]/80 border border-border-subtle rounded-xl p-5 shadow-2xl backdrop-blur-md overflow-hidden spotlight-card flex flex-col min-h-[380px] h-full">
            {/* Tab Selector Bar */}
            <div className="flex justify-between items-center pb-3 mb-4 border-b border-zinc-900 font-mono text-[10px] text-zinc-500 z-10 relative">
              <div className="flex space-x-2">
                <button 
                  onClick={() => { setActiveTab("json"); setRunState("idle"); }}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${activeTab === "json" ? "bg-zinc-900 text-white font-bold" : "hover:text-zinc-300"}`}
                >
                  developer.json
                </button>
                <button 
                  onClick={() => { setActiveTab("ts"); setRunState("idle"); }}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${activeTab === "ts" ? "bg-zinc-900 text-white font-bold" : "hover:text-zinc-300"}`}
                >
                  architecture.ts
                </button>
                <button 
                  onClick={() => { setActiveTab("yaml"); setRunState("idle"); }}
                  className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${activeTab === "yaml" ? "bg-zinc-900 text-white font-bold" : "hover:text-zinc-300"}`}
                >
                  aws_infra.yaml
                </button>
              </div>
              <span>UTF-8</span>
            </div>

            {/* Code Editor Body */}
            <div className="flex-grow font-mono text-xs md:text-sm text-zinc-300 text-left space-y-1.5 z-10 relative bg-black/40 p-4 rounded-lg border border-zinc-950/80 overflow-y-auto max-h-[250px]">
              {activeTab === "json" && (
                <>
                  <div><span className="text-zinc-500">{"{"}</span></div>
                  <div className="pl-4">
                    <span className="text-indigo-400">&quot;name&quot;</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;Shaik Shybash&quot;</span><span className="text-zinc-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-400">&quot;role&quot;</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;Associate Software Engineer&quot;</span><span className="text-zinc-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-400">&quot;experience&quot;</span><span className="text-zinc-500">:</span> <span className="text-amber-400">&quot;1 Year&quot;</span><span className="text-zinc-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-400">&quot;focus&quot;</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;Backend Microservices & APIs&quot;</span><span className="text-zinc-500">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-400">&quot;location&quot;</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;Hyderabad, IN&quot;</span>
                  </div>
                  <div><span className="text-zinc-500">{"}"}</span></div>
                </>
              )}

              {activeTab === "ts" && (
                <>
                  <div><span className="text-purple-400">interface</span> <span className="text-blue-400">ServiceNode</span> <span className="text-zinc-500">{"{"}</span></div>
                  <div className="pl-4"><span className="text-zinc-400">name</span><span className="text-zinc-500">:</span> <span className="text-amber-400">string</span><span className="text-zinc-500">;</span></div>
                  <div className="pl-4"><span className="text-zinc-400">runtime</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;Node.js&quot;</span><span className="text-zinc-500">;</span></div>
                  <div className="pl-4"><span className="text-zinc-400">framework</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;Express&quot;</span><span className="text-zinc-500">;</span></div>
                  <div className="pl-4"><span className="text-zinc-400">database</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;MongoDB&quot;</span> <span className="text-purple-400">|</span> <span className="text-emerald-400">&quot;SQL&quot;</span><span className="text-zinc-500">;</span></div>
                  <div><span className="text-zinc-500">{"}"}</span></div>
                  <div className="pt-2"><span className="text-purple-400">export const</span> <span className="text-blue-400">GatewayService</span><span className="text-zinc-500">:</span> <span className="text-blue-400">ServiceNode</span> <span className="text-zinc-500">=</span> <span className="text-zinc-500">{"{"}</span></div>
                  <div className="pl-4"><span className="text-zinc-400">name</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;api-gateway&quot;</span><span className="text-zinc-500">,</span></div>
                  <div className="pl-4"><span className="text-zinc-400">runtime</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;Node.js&quot;</span><span className="text-zinc-500">,</span></div>
                  <div className="pl-4"><span className="text-zinc-400">framework</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;Express&quot;</span><span className="text-zinc-500">,</span></div>
                  <div className="pl-4"><span className="text-zinc-400">database</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">&quot;MongoDB&quot;</span></div>
                  <div><span className="text-zinc-500">{"};"}</span></div>
                </>
              )}

              {activeTab === "yaml" && (
                <>
                  <div><span className="text-indigo-400">infrastructure</span><span className="text-zinc-500">:</span></div>
                  <div className="pl-4"><span className="text-indigo-400">provider</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">aws</span></div>
                  <div className="pl-4"><span className="text-indigo-400">services</span><span className="text-zinc-500">:</span></div>
                  <div className="pl-8"><span className="text-indigo-400">compute</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">ECS Fargate</span></div>
                  <div className="pl-8"><span className="text-indigo-400">containers</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">Docker</span></div>
                  <div className="pl-8"><span className="text-indigo-400">caching</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">Redis (Cache/Queues)</span></div>
                  <div className="pl-8"><span className="text-indigo-400">networking</span><span className="text-zinc-500">:</span></div>
                  <div className="pl-12"><span className="text-indigo-400">cdn</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">CloudFront</span></div>
                  <div className="pl-12"><span className="text-indigo-400">storage</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">S3 Static Assets</span></div>
                </>
              )}
            </div>

            {/* Compile Executer Bar */}
            <div className="mt-4 pt-3 border-t border-zinc-900/60 flex justify-between items-center z-10 relative">
              {runState === "idle" && (
                <button 
                  onClick={handleRunSpec}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-[10px] border border-zinc-800 transition-colors active:scale-95 cursor-pointer"
                >
                  <Play className="h-3 w-3 text-emerald-400" />
                  <span>RUN SPEC</span>
                </button>
              )}

              {runState === "running" && (
                <span className="flex items-center space-x-1.5 text-zinc-500 font-mono text-[10px]">
                  <Loader2 className="h-3 w-3 animate-spin text-blue-400" />
                  <span>COMPILING SOURCE...</span>
                </span>
              )}

              {runState === "success" && (
                <div className="flex items-center justify-between w-full">
                  <span className="flex items-center space-x-1 text-emerald-400 font-mono text-[10px] font-bold">
                    <Check className="h-3.5 w-3.5" />
                    <span>BUILD SUCCESSFUL (842ms)</span>
                  </span>
                  <button 
                    onClick={() => setRunState("idle")}
                    className="font-mono text-[9px] text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                  >
                    RESET
                  </button>
                </div>
              )}

              {runState === "idle" && (
                <span className="font-mono text-[9px] text-zinc-600">Compiler Ready.</span>
              )}
            </div>
          </div>
        </Tilt>

      </div>
    </section>
  );
}
