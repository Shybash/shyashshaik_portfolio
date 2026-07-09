"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Loader2 } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Tilt from "@/components/Tilt";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    // Simulate sending progress
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-transparent border-b border-border-subtle relative">
      <div className="absolute inset-0 grid-bg-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16 text-left">
          <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">{"// CONTACT"}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Get In Touch</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white font-sans">Reach Out Directly</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans max-w-md">
                Interested in discussing backend roles, database design, or collaboration opportunities? Send a message through the form on the right, or contact me via my links below.
              </p>

              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:shybashshaik@gmail.com" 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-[#0a0c24]/30 border border-white/5 hover:border-white/20 hover:bg-[#121435]/40 transition-all group backdrop-blur-md"
                >
                  <div className="p-2.5 rounded bg-zinc-950/60 border border-white/5 text-emerald-450 group-hover:bg-emerald-950/20 group-hover:text-emerald-300 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left font-mono text-xs">
                    <span className="text-zinc-500 block uppercase font-bold">Primary Email</span>
                    <span className="text-zinc-200 block font-semibold font-sans">shybashshaik@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/Shybash" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-[#0a0c24]/30 border border-white/5 hover:border-white/20 hover:bg-[#121435]/40 transition-all group backdrop-blur-md"
                >
                  <div className="p-2.5 rounded bg-zinc-950/60 border border-white/5 text-blue-450 group-hover:bg-blue-950/20 group-hover:text-blue-300 transition-colors">
                    <Github className="h-5 w-5" />
                  </div>
                  <div className="text-left font-mono text-xs">
                    <span className="text-zinc-500 block uppercase font-bold">GitHub Portfolio</span>
                    <span className="text-zinc-200 block font-semibold font-sans">github.com/Shybash</span>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/shybashshaik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-[#0a0c24]/30 border border-white/5 hover:border-white/20 hover:bg-[#121435]/40 transition-all group backdrop-blur-md"
                >
                  <div className="p-2.5 rounded bg-zinc-950/60 border border-white/5 text-purple-450 group-hover:bg-purple-950/20 group-hover:text-purple-300 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div className="text-left font-mono text-xs">
                    <span className="text-zinc-500 block uppercase font-bold">LinkedIn Directory</span>
                    <span className="text-zinc-200 block font-semibold font-sans">linkedin.com/in/shybashshaik</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="font-mono text-[10px] text-zinc-500 pt-8 border-t border-white/5">
              LOCATED IN HYDERABAD, INDIA [UTC+5:30]
            </div>
          </div>

          {/* Right: Contact Form */}
          <Tilt className="lg:col-span-7 flex flex-col">
            <div className="w-full bg-[#0a0c24]/30 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col justify-center shadow-2xl relative overflow-hidden min-h-[350px] backdrop-blur-md h-full">
              
              {status !== "success" ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-zinc-550 uppercase font-bold block">Your Name</label>
                      <input 
                        type="text" 
                        required
                        disabled={status === "sending"}
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g. John Doe"
                        className="w-full bg-[#050612]/60 border border-white/5 focus:border-emerald-500 rounded-lg p-3 text-xs font-mono text-zinc-200 outline-none transition-all placeholder:text-zinc-700 disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-zinc-550 uppercase font-bold block">Your Email</label>
                      <input 
                        type="email" 
                        required
                        disabled={status === "sending"}
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="e.g. j.doe@company.com"
                        className="w-full bg-[#050612]/60 border border-white/5 focus:border-emerald-500 rounded-lg p-3 text-xs font-mono text-zinc-200 outline-none transition-all placeholder:text-zinc-700 disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] text-zinc-550 uppercase font-bold block">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      disabled={status === "sending"}
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Provide details about opportunities or projects..."
                      className="w-full bg-[#050612]/60 border border-white/5 focus:border-emerald-500 rounded-lg p-3 text-xs font-mono text-zinc-200 outline-none transition-all resize-none placeholder:text-zinc-700 disabled:opacity-50"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-white text-black font-semibold text-xs rounded-lg hover:bg-zinc-200 active:scale-98 transition-all font-mono tracking-wider uppercase disabled:opacity-50 cursor-pointer"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-sans">Message Sent Successfully</h4>
                  <p className="text-xs text-zinc-400 max-w-sm leading-relaxed mb-6 font-sans">
                    Thank you for reaching out! I appreciate you taking the time to write. I will get back to you as soon as possible at the email address you provided.
                  </p>
                  <button 
                    type="submit"
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 border border-white/10 hover:border-white/20 rounded-lg text-[10px] font-mono text-zinc-300 hover:text-white hover:bg-zinc-900/40 transition-all active:scale-95 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}

            </div>
          </Tilt>

        </div>

      </div>
    </section>
  );
}
