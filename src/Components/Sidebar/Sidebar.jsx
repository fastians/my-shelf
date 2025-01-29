import React, { useEffect, useState } from "react";
import MainDiv from "../MainDiv/MainDiv";
import ThemeChanger from "../ThemeChanger/ThemeChanger";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    "home",
    "about",
    "services",
    "skills",
    "education",
    "experience",
    "work",
    "blog",
    "contact",
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    setActiveSection(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const sectionPositions = sections.map((id) => {
      const section = document.getElementById(id);
      return section ? section.getBoundingClientRect().top : null;
    });

    const currentSection = sections.find((_, index) => {
      const nextSectionTop = sectionPositions[index + 1];
      return sectionPositions[index] <= window.innerHeight / 2 &&
        (nextSectionTop === null || nextSectionTop > window.innerHeight / 2)
        ? true
        : false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    const handleToggle = (event) => {
      event.preventDefault();
      const body = document.querySelector("body");
      const navToggle = document.querySelector(".js-colorlib-nav-toggle");

      if (body.classList.contains("offcanvas")) {
        navToggle.classList.remove("active");
        body.classList.remove("offcanvas");
      } else {
        navToggle.classList.add("active");
        body.classList.add("offcanvas");
      }
    };

    const navToggle = document.querySelector(".js-colorlib-nav-toggle");
    navToggle.addEventListener("click", handleToggle);

    window.addEventListener("scroll", handleScroll);

    return () => {
      navToggle.removeEventListener("click", handleToggle);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="colorlib-page"
      className="bg-white dark:bg-black transition-all duration-200"
    >
      <div className="container-wrap bg-[#f2f3f7] dark:bg-gray-800 dark:text-white">
        <a
          href="#"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i></i>
        </a>
        <aside
          id="colorlib-aside"
          role="complementary"
          className="border h-full dark:bg-black bg-[#f2f3f7]"
        >
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: `url("images/about.jpg")` }}
            ></div>
            <h1 id="colorlib-logo" className="dark:text-white text-black">
              <a href="index.html">Abdul Mateen</a>
            </h1>
            <span className="position">
              Frontend Developer
            </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div
              id="navbar"
              // className="collapse"
            >
              <ul>
                <li
                  className={`cursor-pointer hover:underline hover:text-[#2c98f0] transition-all duration-300 ${
                    activeSection === "home" && "text-[#2c98f0] underline"
                  }`}
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </li>
                <li
                  className={`cursor-pointer hover:underline hover:text-[#2c98f0] transition-all duration-300 ${
                    activeSection === "about" && "text-[#2c98f0] underline"
                  }`}
                  onClick={() => scrollToSection("about")}
                >
                  About
                </li>
                <li
                  className={`cursor-pointer hover:underline hover:text-[#2c98f0] transition-all duration-300 ${
                    activeSection === "services" && "text-[#2c98f0] underline"
                  }`}
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </li>
                <li
                  className={`cursor-pointer hover:underline hover:text-[#2c98f0] transition-all duration-300 ${
                    activeSection === "skills" && "text-[#2c98f0] underline"
                  }`}
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </li>
                <li
                  className={`cursor-pointer hover:underline hover:text-[#2c98f0] transition-all duration-300 ${
                    activeSection === "education" && "text-[#2c98f0] underline"
                  }`}
                  onClick={() => scrollToSection("education")}
                >
                  Education
                </li>
                <li
                  className={`cursor-pointer hover:underline hover:text-[#2c98f0] transition-all duration-300 ${
                    activeSection === "experience" && "text-[#2c98f0] underline"
                  }`}
                  onClick={() => scrollToSection("experience")}
                >
                  Experience
                </li>
                <li
                  className={`cursor-pointer hover:underline hover:text-[#2c98f0] transition-all duration-300 ${
                    activeSection === "work" && "text-[#2c98f0] underline"
                  }`}
                  onClick={() => scrollToSection("work")}
                >
                  Work
                </li>
                {/* <li
                  className={`cursor-pointer hover:underline hover:text-[#2c98f0] transition-all duration-300 ${
                    activeSection === "blog" && "text-[#2c98f0] underline"
                  }`}
                  onClick={() => scrollToSection("blog")}
                >
                  Blog
                </li> */}
                {/* <li
                  className={`cursor-pointer hover:underline hover:text-[#2c98f0] transition-all duration-300 ${
                    activeSection === "contact" && "text-[#2c98f0] underline"
                  }`}
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </li> */}
              </ul>
            </div>
          </nav>
          <div className="flex justify-center items-center">
            <ThemeChanger />
          </div>
        </aside>
        <MainDiv />
      </div>
    </div>
  );
};

export default Sidebar;
