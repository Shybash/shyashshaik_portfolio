"use client";

import React, { useEffect } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // Visibility change tab title handler
  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.getElementById("favicon") as HTMLLinkElement;
      if (document.visibilityState === "visible") {
        document.title = "Shaik Shybash | Software Engineer Portfolio";
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

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Particle Canvas */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
