"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import "./experience.css";

export default function ExperiencePage() {
  const [menuActive, setMenuActive] = useState(false);
  const [srLoaded, setSrLoaded] = useState(false);

  // Visibility change tab title handler
  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.getElementById("favicon") as HTMLLinkElement;
      if (document.visibilityState === "visible") {
        document.title = "Experience | Portfolio Shaik Shybash";
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

  // ScrollReveal initialization
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (srLoaded && typeof window !== "undefined" && (window as any).ScrollReveal) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const srtop = (window as any).ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 1000,
        reset: true,
      });

      srtop.reveal(".experience .timeline", { delay: 400 });
      srtop.reveal(".experience .timeline .container", { interval: 400 });
    }
  }, [srLoaded]);

  return (
    <>
      <Script src="https://unpkg.com/scrollreveal" onLoad={() => setSrLoaded(true)} />

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
              <Link href="/#work" onClick={() => setMenuActive(false)}>Work</Link>
            </li>
            <li>
              <Link className="active" href="/#experience" onClick={() => setMenuActive(false)}>Experience</Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setMenuActive(false)}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* navbar ends */}

      {/* experience section starts */}
      <section className="experience" id="experience">
        <h2 className="heading">
          <i className="fas fa-briefcase"></i> Experience
        </h2>
        <div className="quote">
          <span>
            every experience in your life is being orchestrated to teach you something you need to know to move forward.
          </span>
        </div>

        <div className="timeline">
          <div className="container right">
            <div className="content">
              <div className="tag">
                <h2>Minfy Technologies</h2>
              </div>
              <div className="desc">
                <h3>Associate Software Engineer</h3>
                <p>Oct 2025 - Present</p>
                <ul style={{ marginTop: "10px", paddingLeft: "15px", fontSize: "1.4rem", textAlign: "left", lineHeight: "1.6" }}>
                  <li>Develop and maintain scalable microservices using Node.js, Express.js, and AWS</li>
                  <li>Collaborate with cross-functional teams to deliver features using Agile methodologies</li>
                  <li>Implement RESTful APIs following industry best practices, improving maintainability</li>
                  <li>Participate in code reviews and contribute to team knowledge sharing, enhancing code quality</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container left">
            <div className="content">
              <div className="tag">
                <h2>Minfy Technologies</h2>
              </div>
              <div className="desc">
                <h3>Software Development Intern</h3>
                <p>Apr 2025 - Sep 2025</p>
                <ul style={{ marginTop: "10px", paddingLeft: "15px", fontSize: "1.4rem", textAlign: "left", lineHeight: "1.6" }}>
                  <li>Built modular web applications using JavaScript, Node.js, and Express.js</li>
                  <li>Participated in daily stand-ups, sprint planning, and retrospectives following Scrum methodology</li>
                  <li>Contributed to code reviews and technical documentation, improving productivity by 15%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="morebtn">
          <Link href="/#experience" className="btn">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
      {/* experience section ends */}

      {/* footer section starts */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Shybash&apos;s Portfolio</h3>
            <p>
              Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep
              Rising 🚀.
            </p>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <Link href="/#home">
              <i className="fas fa-chevron-circle-right"></i> home
            </Link>
            <Link href="/#about">
              <i className="fas fa-chevron-circle-right"></i> about
            </Link>
            <Link href="/#skills">
              <i className="fas fa-chevron-circle-right"></i> skills
            </Link>
            <Link href="/#education">
              <i className="fas fa-chevron-circle-right"></i> education
            </Link>
            <Link href="/#work">
              <i className="fas fa-chevron-circle-right"></i> work
            </Link>
            <Link href="/#experience">
              <i className="fas fa-chevron-circle-right"></i> experience
            </Link>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <p>
              {" "}
              <i className="fas fa-phone"></i>+91 6302153669
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope"></i>shybashshaik@gmail.com
            </p>
            <p>
              {" "}
              <i className="fas fa-map-marked-alt"></i>Hyderabad, Telangana
            </p>
            <div className="share">
              <a href="https://linkedin.com/in/shybashshaik" className="fab fa-linkedin" target="_blank"></a>
            </div>
          </div>
        </div>

        <h1 className="credit">
          Designed with <i className="fa fa-heart pulse"></i> by{" "}
          <a href="https://github.com/Shybash">Shaik Shybash</a>
        </h1>
      </section>
      {/* footer section ends */}

      {/* scroll top btn */}
      <a href="#experience" className="fas fa-angle-up" id="scroll-top"></a>
    </>
  );
}
