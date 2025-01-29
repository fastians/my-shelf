import React, { useState } from "react";
import Education from "../Education/Education";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaGitlab } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const MainDiv = () => {
  return (
    <div id="colorlib-main" className="dark:bg-black">
      <section id="home" className="h-full dark:bg-black" data-section="home">
        <div className="flexslider h-full">
          <ul className="">
            <li className="relative h-[100vh] flex  justify-center px-20">
              <div className=" flex flex-col gap-6  justify-center w-full">
                <h1 className="sm:text-7xl text-3xl font-bold ">
                  Hi! <br className="my-4" />
                  I'm Jackson
                </h1>
                <h2 className="leading-relaxed sm:text-2xl text-lg w-3/4 my-4">
                  Building Scalable Solutions,
                  <br />
                  One Line of Code at a Time.
                </h2>
                <p className="">
                  <a className="btn-learn">
                    Download CV <i class="fa-solid fa-download"></i>
                  </a>
                </p>
              </div>
              <div className="flex flex-col  items-center justify-center gap-2 px-4  font-medium w-full">
                <a
                  href="https://wa.me/+923222243431"
                  className="btn-learn flex items-center justify-between !py-2 gap-2 w-60"
                >
                  WhatsApp
                  <IoLogoWhatsapp size="30px" />
                </a>
                <a
                  className="btn-learn flex items-center !py-2 gap-2 w-60 justify-between"
                  target="_blank"
                  href="https://mail.google.com/"
                >
                  E-Mail
                  <MdEmail size="30px" />
                </a>

                <a
                  className="btn-learn flex items-center !py-2 gap-2 w-60 justify-between"
                  href="https://www.linkedin.com/in/abdul-mateen-374562333/"
                  target="_blank"
                >
                  Linkedin
                  <FaLinkedin size="30px" />
                </a>

                <a
                  className="btn-learn flex items-center !py-2 gap-2 w-60 justify-between"
                  href="https://github.com/abdulnextdev"
                  target="_blank"
                >
                  GitHub
                  <FaGithubSquare size="30px" />
                </a>
                <a
                  className="btn-learn flex items-center !py-2 gap-2 w-60 justify-between"
                  href="https://gitlab.com/abdulnextdev"
                  target="_blank"
                >
                  GitLab
                  <FaGitlab size="30px" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="colorlib-about" id="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading dark:text-white">
                      Who Am I?
                    </h2>
                    <p>
                      <strong>Hi I'm Jackson Ford</strong> On her way she met a
                      copy. The copy warned the Little Blind Text, that where it
                      came from it would have been rewritten a thousand times
                      and everything that was left from its origin would be the
                      word "and" and the Little Blind Text should turn around
                      and return to its own, safe country.
                    </p>
                    <p>
                      Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name of Lorem
                      Ipsum decided to leave for the far World of Grammar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="services color-1 dark:bg-gray-300">
                    <span className="icon2">
                      <i className="fa-regular fa-lightbulb"></i>{" "}
                    </span>
                    <h3>Graphic Design</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box "
                  data-animate-effect="fadeInRight"
                >
                  <div className=" services color-2 dark:bg-gray-300 ">
                    <span className="icon2">
                      <i className="fa-solid fa-globe"></i>{" "}
                    </span>
                    <h3>Web Design</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="services color-3 dark:bg-gray-300">
                    <span className="icon2">
                      <i class="fa-solid fa-database"></i>{" "}
                    </span>
                    <h3>Software</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="services color-4 dark:bg-gray-300">
                    <span className="icon2">
                      <i class="fa-solid fa-mobile-screen"></i>{" "}
                    </span>
                    <h3>Application</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-12 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="hire">
                    <h2>
                      I am happy to know you <br />
                      that 300+ projects done sucessfully!
                    </h2>
                    <a href="#" className="btn-hire">
                      Hire me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="colorlib-services " id="services">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box "
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading dark:text-white">
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1  dark:bg-gray-300">
                <span className="icon">
                  <i className="fa-regular fa-lightbulb"></i>
                </span>
                <div className="desc">
                  <h3>Innovative Ideas</h3>
                  <p className="dark:text-gray-800">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-2  dark:bg-gray-300">
                <span className="icon">
                  <i className="fa-solid fa-database"></i>
                </span>
                <div className="desc">
                  <h3>Software</h3>
                  <p className="dark:text-gray-800">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3 dark:bg-gray-300">
                <span className="icon">
                  <i className="fa-solid fa-mobile-screen"></i>
                </span>
                <div className="desc">
                  <h3>Application</h3>
                  <p className="dark:text-gray-800">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4 dark:bg-gray-300">
                <span className="icon">
                  <i class="fa-solid fa-layer-group"></i>{" "}
                </span>
                <div className="desc">
                  <h3>Graphic Design</h3>
                  <p className="dark:text-gray-800">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5 dark:bg-gray-300">
                <span className="icon">
                  <i className="fa-solid fa-database"></i>
                </span>
                <div className="desc">
                  <h3>Software</h3>
                  <p className="dark:text-gray-800">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-6 dark:bg-gray-300">
                <span className="icon">
                  <i className="fa-solid fa-mobile-screen"></i>
                </span>
                <div className="desc">
                  <h3>Application</h3>
                  <p className="dark:text-gray-800">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="colorlib-counter"
        className="colorlib-counters"
        style={{ backgroundImage: `url("images/cover_bg_1.jpg")` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="colorlib-narrow-content ">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="309"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">Cups of coffee</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="356"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">Projects</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="30"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">Clients</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="10"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">Partners</span>
            </div>
          </div>
        </div>
      </div>

      <section className="colorlib-skills" id="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Specialty</span>
              <h2 className="colorlib-heading animate-box dark:text-white">
                My Skills
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box mb-8"
              data-animate-effect="fadeInLeft"
            >
              <p>
                I specialize in crafting high-performance, user-centric web
                applications. With expertise in modern frontend frameworks and
                backend technologies, I build scalable and maintainable software
                solutions that enhance user experience and business efficiency.
                My skills include frontend development, API integration, code
                optimization, and deployment automation.
              </p>
            </div>

            {/* Frontend Skills */}
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3 className="dark:text-white">React.js & Next.js</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-1 w-[90%]"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3 className="dark:text-white">JavaScript & TypeScript</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-2 w-[85%]"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3 className="dark:text-white">CSS3 & Tailwind</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-3 w-[90%]"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3 className="dark:text-white">Node.js & PHP</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-4 w-[75%]"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>75%</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3 className="dark:text-white">RESTful APIs & GraphQL</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-5 w-[80%]"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Deployment & DevOps */}
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="progress-wrap">
                <h3 className="dark:text-white">AWS & Docker</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-6 w-[70%]"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Education />

      <section className="colorlib-experience" id="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Experience</span>
              <h2 className="colorlib-heading animate-box dark:text-white">
                Work Experience
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered dark:text-gray-800">
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i class="fa-solid fa-pencil"></i>
                    </div>

                    <div className="timeline-label bg-[#f2f3f7] dark:bg-gray-200">
                      <h2>
                        <a href="#">Full Stack Developer</a>{" "}
                        <span>2017-2018</span>
                      </h2>
                      <p>
                        Tolerably earnestly middleton extremely distrusts she
                        boy now not. Add and offered prepare how cordial two
                        promise. Greatly who affixed suppose but enquire compact
                        prepare all put. Added forth chief trees but rooms think
                        may.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-2">
                      <i class="fa-solid fa-pencil"></i>
                    </div>
                    <div className="timeline-label bg-[#f2f3f7] dark:bg-gray-200">
                      <h2>
                        <a href="#">Front End Developer at Google Company</a>{" "}
                        <span>2017-2018</span>
                      </h2>
                      <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic life One day
                        however a small line of blind text by the name of Lorem
                        Ipsum decided to leave for the far World of Grammar.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i class="fa-solid fa-pencil"></i>
                    </div>
                    <div className="timeline-label bg-[#f2f3f7] dark:bg-gray-200">
                      <h2>
                        <a href="#">System Analyst</a> <span>2017-2018</span>
                      </h2>
                      <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic life One day
                        however a small line of blind text by the name of Lorem
                        Ipsum decided to leave for the far World of Grammar.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i class="fa-solid fa-pencil"></i>
                    </div>
                    <div className="timeline-label bg-[#f2f3f7] dark:bg-gray-200">
                      <h2>
                        <a href="#">Creative Designer</a> <span>2017-2018</span>
                      </h2>
                      <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic life One day
                        however a small line of blind text by the name of Lorem
                        Ipsum decided to leave for the far World of Grammar.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i class="fa-solid fa-pencil"></i>
                    </div>
                    <div className="timeline-label bg-[#f2f3f7] dark:bg-gray-200">
                      <h2>
                        <a href="#">UI/UX Designer at Envato</a>{" "}
                        <span>2017-2018</span>
                      </h2>
                      <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic life One day
                        however a small line of blind text by the name of Lorem
                        Ipsum decided to leave for the far World of Grammar.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry begin animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none"></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="colorlib-work" id="work">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading animate-box dark:text-white">
                Recent Work
              </h2>
            </div>
          </div>
          <div
            className="row row-bottom-padded-sm animate-box "
            data-animate-effect="fadeInLeft"
          >
            <div className="col-md-12">
              <p className="work-menu">
                <span>
                  <a href="#" className="active">
                    Graphic Design
                  </a>
                </span>{" "}
                <span>
                  <a className="dark:text-white" href="#">
                    Web Design
                  </a>
                </span>{" "}
                <span>
                  <a className="dark:text-white" href="#">
                    Software
                  </a>
                </span>{" "}
                <span>
                  <a className="dark:text-white" href="#">
                    Apps
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: `url("images/img-1.jpg")` }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 01</a>
                    </h3>
                    <span>Website</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-share-nodes"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div
                className="project"
                style={{ backgroundImage: `url("images/img-2.jpg")` }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 02</a>
                    </h3>
                    <span>Animation</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-share-nodes"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInTop"
            >
              <div
                className="project"
                style={{ backgroundImage: `url("images/img-3.jpg")` }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 03</a>
                    </h3>
                    <span>Illustration</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-share-nodes"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInBottom"
            >
              <div
                className="project"
                style={{ backgroundImage: `url("images/img-4.jpg")` }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 04</a>
                    </h3>
                    <span>Application</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-share-nodes"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: `url("images/img-5.jpg")` }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 05</a>
                    </h3>
                    <span>Graphic, Logo</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-share-nodes"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div
                className="project"
                style={{ backgroundImage: `url("images/img-6.jpg")` }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 06</a>
                    </h3>
                    <span>Web Design</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-share-nodes"></i>
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-eye"></i> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i class="fa-solid fa-heart"></i> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box">
              <p>
                <a href="#" className="btn btn-primary btn-lg btn-load-more">
                  Load more <i class="fa-solid fa-rotate-right"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="colorlib-blog" id="work">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading dark:text-white">Recent Work</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4 col-sm-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="blog-entry dark:bg-gray-200 dark:text-gray-800">
                <a href="blog.html" className="blog-img">
                  <img
                    src="images/blog-1.jpg"
                    className="img-responsive"
                    alt="HTML5 Bootstrap Template by colorlib.com"
                  />
                </a>
                <div className="desc">
                  <span>
                    <small>April 14, 2018 </small> | <small> Web Design </small>{" "}
                    |{" "}
                    <small>
                      {" "}
                      <i className="icon-bubble3"></i> 4
                    </small>
                  </span>
                  <h3>
                    <a href="blog.html">Renovating National Gallery</a>
                  </h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="blog-entry  dark:bg-gray-200 dark:text-gray-800">
                <a href="blog.html" className="blog-img">
                  <img
                    src="images/blog-2.jpg"
                    className="img-responsive"
                    alt="HTML5 Bootstrap Template by colorlib.com"
                  />
                </a>
                <div className="desc">
                  <span>
                    <small>React Js </small> | <small> Web Design </small> |{" "}
                    <small>
                      {" "}
                      <i className="icon-bubble3"></i> 4
                    </small>
                  </span>
                  <h3>
                    <a href="blog.html">Wordpress for a Beginner</a>
                  </h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="blog-entry  dark:bg-gray-200 dark:text-gray-800">
                <a href="blog.html" className="blog-img">
                  <img
                    src="images/blog-3.jpg"
                    className="img-responsive"
                    alt="HTML5 Bootstrap Template by colorlib.com"
                  />
                </a>
                <div className="desc">
                  <span>
                    <small>April 14, 2018 </small> |{" "}
                    <small> Inspiration </small> |{" "}
                    <small>
                      {" "}
                      <i className="icon-bubble3"></i> 4
                    </small>
                  </span>
                  <h3>
                    <a href="blog.html">Make website from scratch</a>
                  </h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box">
              <p>
                <a href="#" className="btn btn-primary btn-lg btn-load-more">
                  Load more <i class="fa-solid fa-rotate-right"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="colorlib-contact" id="contact">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Get in Touch</span>
              <h2 className="colorlib-heading dark:text-white">Contact</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 flex flex-col gap-4">
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon dark:bg-black dark:border-2">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="#">info@domain.com</a>
                  </p>
                </div>
              </div>

              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon dark:bg-black dark:border-2">
                  <i className="fa-solid fa-map"></i>
                </div>
                <div className="colorlib-text">
                  <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
              </div>

              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon dark:bg-black dark:border-2">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="tel://">+123 456 7890</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-md-push-1 sm:mt-0 mt-10">
              <div className="row">
                <div
                  className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <form action="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name=""
                        id="message"
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary btn-send-message"
                        value="Send Message"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default MainDiv;
