import React from "react";

export const About = () => {
  return (
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
                  <h2 className="my-heading dark:text-white">Who Am I?</h2>
                  <p>
                    <strong>Hi, I'm Abdul</strong>, a passionate and
                    results-driven Senior Software Engineer specializing in
                    Frontend Development with expertise in backend technologies
                    as well. With years of experience building scalable,
                    high-performance applications, I thrive on crafting seamless
                    user experiences and solving complex engineering challenges.
                  </p>
                  <p>
                    I excel in transforming designs into pixel-perfect,
                    responsive UIs using modern frameworks like React.js,
                    Next.js, and Vue.js. My experience extends to optimizing web
                    applications for speed and accessibility, ensuring smooth
                    performance across devices. Additionally, I have hands-on
                    experience in backend technologies like Node.js, PHP, and
                    Firebase, enabling me to develop full-stack solutions that
                    meet business needs.
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
                  <span className="my-counter-label">Cups of coffee</span>
                  <span className="text-5xl text-[#ffffff] opacity-70">1</span>
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
                  <span className="text-5xl text-[#ffffff] opacity-70">2</span>
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
                  <span className="text-5xl text-[#ffffff] opacity-70">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
