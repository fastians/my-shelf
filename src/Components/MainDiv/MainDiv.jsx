import React, { useState } from "react";
import Education from "../Education/Education";

import { Work } from "../Work/Work";
import { Experience } from "../Experience/Experience";
import { Skills } from "../Skills/Skills";
import { Services } from "../Services/Services";
import { About } from "../About/About";
import { Home } from "../Home/Home";

const MainDiv = () => {
  return (
    <div id="my-main" className="dark:bg-black">
      <Home />

      <About />

      <Services />

      <Skills />

      <Education />

      <Experience />
      <Work />
    </div>
  );
};

export default MainDiv;
