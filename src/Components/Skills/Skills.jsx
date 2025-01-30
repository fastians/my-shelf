export const Skills = () => {
  return (
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
              solutions that enhance user experience and business efficiency. My
              skills include frontend development, API integration, code
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
  );
};
