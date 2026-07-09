"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  const [menuActive, setMenuActive] = useState(false);

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
              <Link href="/#home">Home</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#skills">Skills</Link>
            </li>
            <li>
              <Link href="/#education">Education</Link>
            </li>
            <li>
              <Link href="/#work">Work</Link>
            </li>
            <li>
              <Link href="/#experience">Experience</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* navbar ends */}

      {/* 404 section start */}
      <section className="page_404">
        <div className="container">
          <div className="wrapper">
            <h1 className="text-center">404</h1>
          </div>

          <div className="msg">
            <h3>Looks like you&apos;re lost</h3>
            <p>The page you are looking for is not available!</p>

            <div className="backbtn">
              <Link href="/" className="btn">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 404 section end */}

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
    </>
  );
}
