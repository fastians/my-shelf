import React, { useState } from "react";

const Education = () => {
  const [openPanel, setOpenPanel] = useState("collapseOne");

  const togglePanel = (panelId) => {
    setOpenPanel(openPanel === panelId ? "" : panelId);
  };
  return (
    <section className="colorlib-education" id="education">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">Education</span>
            <h2 className="colorlib-heading animate-box dark:text-white">
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
                    <h4 className="panel-title">
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
                    className={`panel-collapse  ${
                      openPanel === "collapseOne" ? "in" : "collapse"
                    }`}
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-6">
                          <p className="dark:text-gray-800">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.{" "}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="dark:text-gray-800">
                            Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean.
                          </p>
                        </div>
                      </div>
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
                    <div className="panel-body">
                      <p className="dark:text-gray-800">
                        Far far away, behind the word <strong>mountains</strong>
                        , far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in
                        Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.
                      </p>
                      <ul type="circle">
                        <li className="dark:text-gray-800">
                          Separated they live in Bookmarksgrove right
                        </li>
                        <li className="dark:text-gray-800">
                          Separated they live in Bookmarksgrove right
                        </li>
                      </ul>
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
                    <div className="panel-body">
                      <p className="dark:text-gray-800">
                        Far far away, behind the word <strong>mountains</strong>
                        , far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in
                        Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.
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
