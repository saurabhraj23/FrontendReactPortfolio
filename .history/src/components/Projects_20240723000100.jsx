import React from "react";
import "../styles/App.css";

function Projects() {
  return (
    <>
      <div className="projects-left-side"></div>
      <div className="projects-right-side">
        <button className="project-item">
          <img src="" alt="" />
          OnlineBankingApp
        </button>
        <button className="project-item">GlassPortfolio</button>
        <button className="project-item">Denoising Image</button>
        <button className="project-item">Pruning of LLM</button>
      </div>
    </>
  );
}

export default Projects;
