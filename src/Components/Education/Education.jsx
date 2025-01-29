import React, { useState } from "react";

const Education = () => {
  const [openPanel, setOpenPanel] = useState("collapseOne");

  const togglePanel = (panelId) => {
    setOpenPanel(openPanel === panelId ? "" : panelId);
  };
  return (
    <section className="my-education" id="education">
      <div className="my-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Education</span>
            <h2 className="my-heading animate-box dark:text-white">
              Education
            </h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="fancy-collapse-panel">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading " role="tab" id="headingOne">
                    <h4 className="panel-title ">
                      <a
                        onClick={() => togglePanel("collapseOne")}
                        aria-expanded={openPanel === "collapseOne"}
                        className={`${
                          openPanel === "collapseOne" || "collapsed"
                        }`}
                      >
                        Master Degree of Computer Science
                      </a>
                    </h4>
                    {/* <i className="fa-solid fa-plus bg-[#2c98f0] w-full h-full"></i> */}
                  </div>
                  <div
                    id="collapseOne"
                    className={`panel-collapse ${
                      openPanel === "collapseOne" ? "in" : "collapse"
                    }`}
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body dark:bg-black">
                      <p className="dark:text-gray-300">
                        I developed an in-depth understanding of project
                        management principles, software development life cycles,
                        and Agile methodologies. My studies focused on
                        optimizing team collaboration, risk management, and
                        delivering high-quality software solutions on time and
                        within budget
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <a
                        className={`${
                          openPanel === "collapseTwo" || "collapsed"
                        }`}
                        onClick={() => togglePanel("collapseTwo")}
                        aria-expanded={openPanel === "collapseTwo"}
                      >
                        Bachelor Degree of Computer Science
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className={`panel-collapse  ${
                      openPanel === "collapseTwo" ? "in" : "collapse"
                    }`}
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="panel-body dark:bg-black">
                      <p className="dark:text-gray-300">
                        I gained a strong foundation in artificial intelligence,
                        algorithms, and data structures, along with software
                        development, database management, and computer networks.
                        My studies emphasized problem-solving, optimization, and
                        efficient coding practices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <a
                        className={`${
                          openPanel === "collapseThree" || "collapsed"
                        }`}
                        onClick={() => togglePanel("collapseThree")}
                        aria-expanded={openPanel === "collapseThree"}
                      >
                        Diploma in Information Technology
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    className={`panel-collapse  ${
                      openPanel === "collapseThree" ? "in" : "collapse"
                    }`}
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div className="panel-body dark:bg-black">
                      <p className="dark:text-gray-300">
                        I gained practical knowledge in various aspects of
                        information technology, including computer hardware,
                        software applications, and networking. My coursework
                        focused on troubleshooting, system administration, and
                        enhancing IT infrastructure for efficient business
                        operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
