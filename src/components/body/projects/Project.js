import React from "react";
import Seperator from "../common/Seperator";
import { projectData } from "../data/projects";
import "./Project.css";
import ProjectCard from "./ProjectCard";
function Project() {
  const data = projectData;
  return (
   
    <div className="project_xyz">
       <Seperator/>
      <label className="section__title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Project;
