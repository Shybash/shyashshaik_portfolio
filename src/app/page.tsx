"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import Tilt from "@/components/Tilt";

interface Skill {
  name: string;
  icon: string;
}

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

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const [srLoaded, setSrLoaded] = useState(false);

  // Visibility change tab title handler
  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.getElementById("favicon") as HTMLLinkElement;
      if (document.visibilityState === "visible") {
        document.title = "Portfolio | Shaik Shybash";
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

  // Fetch Skills and Projects data
  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data: Skill[]) => setSkills(data))
      .catch((err) => console.error("Error fetching skills:", err));

    fetch("/projects/projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  // Scrollspy & Scroll-to-top visibility
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

      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          const id = section.getAttribute("id");
          if (id) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  // Typewriter effect
  const words = ["Agentic AI Systems", "LLM Orchestration & RAG", "Microservices Architecture", "Cloud Computing & AWS", "Real-time Distributed Systems"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 25);
    } else {
      timer = setTimeout(() => {
        setCurrentText(word.slice(0, currentText.length + 1));
      }, 50);
    }

    if (!isDeleting && currentText === word) {
      timer = setTimeout(() => setIsDeleting(true), 500); // backDelay
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  // Particles JS initialization
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (particlesLoaded && typeof window !== "undefined" && (window as any).particlesJS) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#000000",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#000000",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, [particlesLoaded]);

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

      srtop.reveal(".home .content h3", { delay: 200 });
      srtop.reveal(".home .content p", { delay: 200 });
      srtop.reveal(".home .content .btn", { delay: 200 });
      srtop.reveal(".home .image", { delay: 400 });
      srtop.reveal(".home .linkedin", { interval: 600 });

      srtop.reveal(".about .content h3", { delay: 200 });
      srtop.reveal(".about .content .tag", { delay: 200 });
      srtop.reveal(".about .content p", { delay: 200 });
      srtop.reveal(".about .content .box-container", { delay: 200 });
      srtop.reveal(".about .content .resumebtn", { delay: 200 });

      srtop.reveal(".skills .container", { interval: 200 });
      srtop.reveal(".skills .container .bar", { delay: 400 });

      srtop.reveal(".education .box", { interval: 200 });

      srtop.reveal(".work .box", { interval: 200 });

      srtop.reveal(".experience .timeline", { delay: 400 });
      srtop.reveal(".experience .timeline .container", { interval: 400 });

      srtop.reveal(".contact .container", { delay: 400 });
      srtop.reveal(".contact .container .form-group", { delay: 400 });
    }
  }, [srLoaded, skills, projects]);

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

  // Form submission handler
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    window.location.href = `mailto:shybashshaik@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    e.currentTarget.reset();
  };

  return (
    <>
      {/* Background script loading */}
      <Script src="/assets/js/particles.min.js" onLoad={() => setParticlesLoaded(true)} />
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
              <a className={activeSection === "home" ? "active" : ""} href="#home" onClick={() => setMenuActive(false)}>
                Home
              </a>
            </li>
            <li>
              <a className={activeSection === "about" ? "active" : ""} href="#about" onClick={() => setMenuActive(false)}>
                About
              </a>
            </li>
            <li>
              <a className={activeSection === "skills" ? "active" : ""} href="#skills" onClick={() => setMenuActive(false)}>
                Skills
              </a>
            </li>
            <li>
              <a className={activeSection === "education" ? "active" : ""} href="#education" onClick={() => setMenuActive(false)}>
                Education
              </a>
            </li>
            <li>
              <a className={activeSection === "work" ? "active" : ""} href="#work" onClick={() => setMenuActive(false)}>
                Work
              </a>
            </li>
            <li>
              <a className={activeSection === "experience" ? "active" : ""} href="#experience" onClick={() => setMenuActive(false)}>
                Experience
              </a>
            </li>
            <li>
              <a className={activeSection === "contact" ? "active" : ""} href="#contact" onClick={() => setMenuActive(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* navbar ends */}

      {/* hero section starts */}
      <section className="home" id="home">
        <div id="particles-js"></div>

        <div className="content">
          <h2>
            Hi There,
            <br /> I&apos;m Shaik <span>Shybash</span>
          </h2>
          <p>
            i am into <span className="typing-text">{currentText}</span>
          </p>
          <a href="#about" className="btn">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down"></i>
          </a>
          <div className="socials">
            <ul className="social-icons">
              <li>
                <a className="linkedin" aria-label="LinkedIn" href="https://linkedin.com/in/shybashshaik" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <Tilt max={15}>
            <img draggable="false" className="tilt" src="/assets/images/hero-photo.jpg" alt="Shaik Shybash" />
          </Tilt>
        </div>
      </section>
      {/* hero section ends */}

      {/* about section starts */}
      <section className="about" id="about">
        <h2 className="heading">
          <i className="fas fa-user-alt"></i> About <span>Me</span>
        </h2>

        <div className="row">
          <div className="content">
            <h3>I&apos;m Shaik Shybash</h3>
            <span className="tag">Associate Software Engineer</span>

            <p>
              Results-driven Associate Software Engineer with expertise in full-stack web development, microservices
              architecture, and cloud computing. Proficient in building scalable applications using Node.js, React.js,
              and AWS services. Strong background in REST API development, real-time communication systems, and agile
              methodologies. AWS Certified Developer with a passion for delivering high-quality, maintainable code.
            </p>

            <div className="box-container">
              <div className="box">
                <p>
                  <span> email : </span> shybashshaik@gmail.com
                </p>
                <p>
                  <span> place : </span> Hyderabad, Telangana
                </p>
              </div>
            </div>

            <div className="resumebtn">
              <a href="#" target="_blank" className="btn">
                <span>Resume</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* about section ends */}

      {/* skills section starts */}
      <section className="skills" id="skills">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
        </h2>

        <div className="container">
          <div className="row" id="skillsContainer">
            {skills.map((skill, idx) => (
              <div className="bar" key={idx}>
                <div className="info">
                  <img src={skill.icon} alt="skill" />
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* skills section ends */}

      {/* education section starts */}
      <section className="education" id="education">
        <h1 className="heading">
          <i className="fas fa-graduation-cap"></i> My <span>Education</span>
        </h1>

        <p className="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img draggable="false" src="/assets/images/educat/college.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Bachelor of Technology in Computer Science Engineering</h3>
              <p>Keshav Memorial Institute of Technology</p>
              <h4>2022-2025 | GPA: 7.9/10</h4>
            </div>
          </div>
        </div>
      </section>
      {/* education section ends */}

      {/* work project section starts */}
      <section className="work" id="work">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
        </h2>

        <div className="box-container">
          {projects
            .filter((p) => p.category !== "android")
            .slice(0, 10)
            .map((project, idx) => (
              <Tilt max={15} className="box tilt" key={idx}>
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
            ))}
        </div>

        <div className="viewall">
          <Link href="/projects" className="btn">
            <span>View All</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
      {/* work project section ends */}

      {/* experience section starts */}
      <section className="experience" id="experience">
        <h2 className="heading">
          <i className="fas fa-briefcase"></i> Experience{" "}
        </h2>

        <div className="timeline">
          <div className="container right">
            <div className="content">
              <div className="tag">
                <h2>Minfy Technologies</h2>
              </div>
              <div className="desc">
                <h3>Associate Software Engineer</h3>
                <p>Oct 2025 - Present</p>
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
              </div>
            </div>
          </div>
        </div>

        <div className="morebtn">
          <Link href="/experience" className="btn">
            <span>View All</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
      {/* experience section ends */}

      {/* contact section starts */}
      <section className="contact" id="contact">
        <h2 className="heading">
          <i className="fas fa-headset"></i> Get in <span>Touch</span>
        </h2>

        <div className="container">
          <div className="content">
            <div className="image-box">
              <img draggable="false" src="/assets/images/contact1.png" alt="" />
            </div>
            <form id="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <div className="field">
                  <input type="text" name="name" placeholder="Name" required />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input type="email" name="email" placeholder="Email" required />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="phone" placeholder="Phone" />
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="message">
                  <textarea placeholder="Message" name="message" required></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>
              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* contact section ends */}

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
            <a href="#home">
              <i className="fas fa-chevron-circle-right"></i> home
            </a>
            <a href="#about">
              <i className="fas fa-chevron-circle-right"></i> about
            </a>
            <a href="#skills">
              <i className="fas fa-chevron-circle-right"></i> skills
            </a>
            <a href="#education">
              <i className="fas fa-chevron-circle-right"></i> education
            </a>
            <a href="#work">
              <i className="fas fa-chevron-circle-right"></i> work
            </a>
            <a href="#experience">
              <i className="fas fa-chevron-circle-right"></i> experience
            </a>
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
              <a href="https://linkedin.com/in/shybashshaik" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank"></a>
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
      <a href="#home" aria-label="ScrollTop" className="fas fa-angle-up" id="scroll-top"></a>
    </>
  );
}
