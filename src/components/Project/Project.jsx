import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import TextPopAnimation from "../TextPopAnimation/TextPopAnimation";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);

  return (
    <div className="max-w-full lg:max-w-7xl mx-auto p-7 mb-10">
      <TextPopAnimation text={"Projects"}></TextPopAnimation>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Project;
