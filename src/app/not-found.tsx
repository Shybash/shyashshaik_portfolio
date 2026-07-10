"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, AlertTriangle } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col items-center justify-center bg-bg-primary">
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16">
        {/* Glowing 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <div className="text-[10rem] md:text-[14rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 select-none">
            404
          </div>
          {/* Ambient glow behind the 404 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]" />
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 max-w-md"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <AlertTriangle className="h-5 w-5 text-amber-400" />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed font-sans">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let me help you find your way back.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 mt-8 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-lg hover:bg-zinc-200 transition-all shadow active:scale-95"
          >
            <Home className="h-4 w-4" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 bg-zinc-950 border border-white/10 text-zinc-300 text-sm px-6 py-3 rounded-lg hover:text-white hover:bg-zinc-900 transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Footer credit */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-zinc-600 font-mono text-xs"
        >
          © {new Date().getFullYear()} Shaik Shybash
        </motion.p>
      </div>
    </div>
  );
}
