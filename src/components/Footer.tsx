"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Heart } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const quickLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative border-t border-white/5 bg-[#030308]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20">
                  S
                </div>
                <span className="font-bold text-lg text-white">
                  Shybash
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                Thank you for visiting my portfolio. I&apos;m always open to
                discussing new opportunities and collaborations. Keep Rising
                🚀
              </p>
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="https://github.com/Shybash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/shybashshaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
                Quick Links
              </h3>
              <nav className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="text-left text-sm text-zinc-400 hover:text-white transition-colors py-1 cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">
                Contact Info
              </h3>
              <div className="space-y-3 text-sm text-zinc-400">
                <p className="flex items-center space-x-2">
                  <span className="text-indigo-400">📧</span>
                  <a
                    href="mailto:shybashshaik@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    shybashshaik@gmail.com
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-indigo-400">📍</span>
                  <span>Hyderabad, Telangana, India</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-indigo-400">📱</span>
                  <span>+91 6302153669</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 text-xs font-mono flex items-center space-x-1">
              <span>Designed with</span>
              <Heart className="h-3 w-3 text-red-500 animate-pulse" />
              <span>by</span>
              <a
                href="https://github.com/Shybash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
              >
                Shaik Shybash
              </a>
            </p>
            <p className="text-zinc-600 text-xs font-mono">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
