import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Project from "./projects/Project";
import Skills from "./skills/Skills";
import Work from "./work/Work";

function Body() {
  return (
    <div className="body">

      <section id="about">
        <About/>
      </section>

      <section id="project">
        <Project/>
      </section>

      <section id="skill">
        <Skills/>
      </section>

      <section id="work">
        <Work/>
      </section>

      <section id="contact">
        <Contact/>
      </section>

    </div>
  );
}

export default Body;
