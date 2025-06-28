import React from "react";
import About from "../../../components/About/About";
import Skill from "../../../components/Skill/Skill";
import Project from "../../../components/Project/Project";
import Education from "../../../components/Education/Education";
import Contact from "../../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <section id="home"></section>

      <section id="about">
        <About />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
