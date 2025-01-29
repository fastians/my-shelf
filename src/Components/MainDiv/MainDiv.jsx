import React, { useState } from "react";
import Education from "../Education/Education";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FiGitlab } from "react-icons/fi";

const MainDiv = () => {
  return (
    <div id="my-main" className="dark:bg-black">
      <section id="home" className="h-full dark:bg-black" data-section="home">
        <div className="flexslider h-full">
          <ul className="">
            <li className="relative h-[100vh] flex items-center justify-between px-20 ">
              <div className=" flex flex-col gap-6  justify-center   h-fit">
                <h1 className="sm:text-7xl text-3xl font-bold ">
                  Hi! <br className="my-4" />
                  I'm Abdul
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
              <div className="flex flex-col  items-end justify-center gap-2   font-medium  h-fit">
                <a
                  href="https://wa.me/+923222243431"
                  className="btn-icons flex items-center justify-end !py-2 gap-3 w-60 group text-gray-800 hover:text-green-500"
                >
                  <span className="group-hover:border-b border-gray-800 group-hover:border-green-500">
                    WhatsApp
                  </span>
                  <FaWhatsapp
                    size="30px"
                    className="text-gray-800 group-hover:text-green-500"
                  />
                </a>

                <a
                  className="btn-icons flex items-center justify-end !py-2 gap-3 w-60 group text-gray-800 hover:text-orange-500"
                  target="_blank"
                  href="https://mail.google.com/"
                >
                  <span className="group-hover:border-b border-gray-800 group-hover:border-orange-500">
                    E-Mail
                  </span>
                  <IoMailOutline
                    size="30px"
                    className="text-gray-800 group-hover:text-orange-500"
                  />
                </a>

                <a
                  className="btn-icons flex items-center justify-end !py-2 gap-3 w-60 group text-gray-800 hover:text-blue-500"
                  href="https://www.linkedin.com/in/abdul-mateen-374562333/"
                  target="_blank"
                >
                  <span className="group-hover:border-b border-gray-800 group-hover:border-blue-500">
                    LinkedIn
                  </span>
                  <CiLinkedin
                    size="30px"
                    className="text-gray-800 group-hover:text-blue-500"
                  />
                </a>

                <a
                  className="btn-icons flex items-center justify-end !py-2 gap-3 w-60 group text-gray-800 hover:text-green-500"
                  href="https://github.com/abdulnextdev"
                  target="_blank"
                >
                  <span className="group-hover:border-b border-gray-800 group-hover:border-green-500">
                    GitHub
                  </span>
                  <LuGithub
                    size="30px"
                    className="text-gray-800 group-hover:text-green-500"
                  />
                </a>

                <a
                  className="btn-icons flex items-center justify-end !py-2 gap-3 w-60 group text-gray-800 hover:text-green-500"
                  href="https://gitlab.com/abdulnextdev"
                  target="_blank"
                >
                  <span className="group-hover:border-b border-gray-800 group-hover:border-green-500">
                    GitLab
                  </span>
                  <FiGitlab
                    size="30px"
                    className="text-gray-800 group-hover:text-[#F96826]"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="my-about " id="about">
        <div className="my-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="my-heading dark:text-white">
                      Who Am I?
                    </h2>
                    <p>
                      <strong>Hi, I'm Abdul</strong>, a passionate and
                      results-driven Senior Software Engineer specializing in
                      Frontend Development with expertise in backend
                      technologies as well. With years of experience building
                      scalable, high-performance applications, I thrive on
                      crafting seamless user experiences and solving complex
                      engineering challenges.
                    </p>
                    <p>
                      I excel in transforming designs into pixel-perfect,
                      responsive UIs using modern frameworks like React.js,
                      Next.js, and Vue.js. My experience extends to optimizing
                      web applications for speed and accessibility, ensuring
                      smooth performance across devices. Additionally, I have
                      hands-on experience in backend technologies like Node.js,
                      PHP, and Firebase, enabling me to develop full-stack
                      solutions that meet business needs.
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
                      <i className="fa-solid fa-code"></i>
                    </span>
                    <h3>Web Development</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="services color-2 dark:bg-gray-300">
                    <span className="icon2">
                      <i className="fa-solid fa-tachometer-alt"></i>
                    </span>
                    <h3>Performance Optimization</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="services color-3 dark:bg-gray-300">
                    <span className="icon2">
                      <i className="fa-solid fa-user-check"></i>
                    </span>
                    <h3>Code Review & Mentorship</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="services color-4 dark:bg-gray-300">
                    <span className="icon2">
                      <i className="fa-solid fa-project-diagram"></i>
                    </span>
                    <h3>Project Management</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="my-counter"
            className="my-counters"
            style={{ backgroundImage: `url("images/cover_bg_1.jpg")` }}
            data-stellar-background-ratio="0.5"
          >
            <div className="overlay"></div>
            <div className="my-narrow-content ">
              <div className="row"></div>
              <div className="row">
                <div className="col-md-4 text-center animate-box">
                  <span
                    className="my-counter js-counter"
                    data-from="0"
                    data-to="309"
                    data-speed="5000"
                    data-refresh-interval="50"
                  ></span>
                  <div>
                    <span className="my-counter-label">
                      Cups of coffee
                    </span>
                    <span className="text-5xl text-[#ffffff] opacity-70">
                      1
                    </span>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                  <span
                    className="my-counter js-counter"
                    data-from="0"
                    data-to="356"
                    data-speed="5000"
                    data-refresh-interval="50"
                  ></span>
                  <div>
                    <span className="my-counter-label">Projects</span>
                    <span className="text-5xl text-[#ffffff] opacity-70">
                      2
                    </span>
                  </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                  <span
                    className="my-counter js-counter"
                    data-from="0"
                    data-to="30"
                    data-speed="5000"
                    data-refresh-interval="50"
                  ></span>
                  <div>
                    <span className="my-counter-label">Clients</span>
                    <span className="text-5xl text-[#ffffff] opacity-70">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-services " id="services">
        <div className="my-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box "
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">What I do?</span>
              <h2 className="my-heading dark:text-white">
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

      <section className="my-skills" id="skills">
        <div className="my-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Specialty</span>
              <h2 className="my-heading animate-box dark:text-white">
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

      <section className="my-experience" id="experience">
        <div className="my-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Experience</span>
              <h2 className="my-heading animate-box dark:text-white">
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
      <section className="my-blog" id="work">
        <div className="my-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Work</span>
              <h2 className="my-heading dark:text-white">Recent Work</h2>
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
                    alt="HTML5 Bootstrap Template by my.com"
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
                    alt="HTML5 Bootstrap Template by my.com"
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
                    alt="HTML5 Bootstrap Template by my.com"
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
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="hire">
                <h2>
                  I am happy to know you that 300+ projects done sucessfully!
                </h2>
                <a href="#" className="btn-hire">
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainDiv;
