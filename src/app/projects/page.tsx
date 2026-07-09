"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Tilt from "@/components/Tilt";
import "./projects.css";

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

export default function ProjectsPage() {
  const [menuActive, setMenuActive] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState("*"); // "*", "agentic", "mern"

  // Visibility change tab title handler
  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.getElementById("favicon") as HTMLLinkElement;
      if (document.visibilityState === "visible") {
        document.title = "Projects | Portfolio Shaik Shybash";
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

  // Scroll top visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTopBtn = document.getElementById("scroll-top");
      if (scrollTopBtn) {
        if (window.scrollY > 60) {
          scrollTopBtn.classList.add("active");
        } else {
          scrollTopBtn.classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Live Chat Tawk.to
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).Tawk_LoadStart = new Date();
    (function () {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      } else {
        document.head.appendChild(s1);
      }
    })();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (filter === "*") return true;
    return project.category === filter;
  });

  return (
    <>
      {/* navbar starts */}
      <header>
        <Link href="/" className="logo">
          <i className="fab fa-node-js"></i> Shybash
        </Link>

        <div
          id="menu"
          className={`fas ${menuActive ? "fa-times" : "fa-bars"}`}
          onClick={() => setMenuActive(!menuActive)}
        ></div>
        <nav className={`navbar ${menuActive ? "nav-toggle" : ""}`}>
          <ul>
            <li>
              <Link href="/#home" onClick={() => setMenuActive(false)}>Home</Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setMenuActive(false)}>About</Link>
            </li>
            <li>
              <Link href="/#skills" onClick={() => setMenuActive(false)}>Skills</Link>
            </li>
            <li>
              <Link href="/#education" onClick={() => setMenuActive(false)}>Education</Link>
            </li>
            <li>
              <Link className="active" href="/#work" onClick={() => setMenuActive(false)}>Work</Link>
            </li>
            <li>
              <Link href="/#experience" onClick={() => setMenuActive(false)}>Experience</Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setMenuActive(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* navbar ends */}

      {/* work project section starts */}
      <section className="work" id="work">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
        </h2>

        <div id="filters" className="button-group">
          <button
            className={`btn ${filter === "*" ? "is-checked" : ""}`}
            onClick={() => setFilter("*")}
          >
            All Projects
          </button>
          <button
            className={`btn ${filter === "agentic" ? "is-checked" : ""}`}
            onClick={() => setFilter("agentic")}
          >
            Agentic AI
          </button>
          <button
            className={`btn ${filter === "mern" ? "is-checked" : ""}`}
            onClick={() => setFilter("mern")}
          >
            MERN Stack
          </button>
        </div>

        <div className="box-container">
          {filteredProjects.map((project, idx) => (
            <div className={`grid-item ${project.category}`} key={idx}>
              <Tilt max={20} className="box tilt">
                <img draggable="false" src={`/assets/images/projects/${project.image}.png`} alt="project" />
                <div className="content">
                  <div className="tag">
                    <h3>{project.name}</h3>
                  </div>
                  <div className="desc">
                    <p>{project.desc}</p>
                    <div className="btns">
                      <a href={project.links.view} className="btn" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-eye"></i> View
                      </a>
                      <a href={project.links.code} className="btn" target="_blank" rel="noopener noreferrer">
                        Code <i className="fas fa-code"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>

        <div className="backbtn">
          <Link href="/#work" className="btn">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
      {/* work project section ends */}

      {/* scroll top btn */}
      <a href="#work" className="fas fa-angle-up" id="scroll-top"></a>
    </>
  );
}
