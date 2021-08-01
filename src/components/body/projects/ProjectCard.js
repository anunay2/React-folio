import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project__card">
      <div className="project__info">
        <label className="project__title">{project.title}</label>
        <div className="project__links">
          {project.demo && (
            <a className="project__link" href={project.demo}>
              <div className="link__button">
                <i class="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}

          {project.github && (
            <a className="project__link" href={project.github}>
              <div className="link__button">
                <i class="devicon-github-original colored"></i>
                Github
              </div>
            </a>
          )}
          {project.doc && (
            <a className="project__link" href={project.doc}>
              <div className="link__button">
              <i class="fi-rr-document-signed"></i>Doc
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project__tags">
          {project.tags.map((tag) => {
            return <label className="project__tag">{tag.name}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project__image" />
    </div>
  );
}

export default ProjectCard;
