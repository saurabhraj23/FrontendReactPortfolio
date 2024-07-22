import React from "react";
import "../styles/App.css";

function handleItem(e) {
  console.log(e.target.value);
}

function Projects() {
  return (
    <>
      <div className="projects-left-side"></div>
      <div className="projects-right-side">
        <div onClick={handleItem} className="project-item">
          <h2>OnlineBankingApp</h2>
        </div>
        <div className="project-item">
          <h2>GlassPortfolio</h2>
        </div>
        <div className="project-item">
          <h2>Denoising Image</h2>
        </div>
        <div className="project-item">
          <h2>Pruning of LLM</h2>
        </div>
      </div>
    </>
  );
}

export default Projects;
