import React from "react";
import "../styles/App.css";

function handleItem(e) {
  console.log(e.target.current);
}

function Projects() {
  return (
    <>
      <div className="projects-left-side"></div>
      <div className="projects-right-side">
        <button onClick={handleItem} className="project-item">
          OnlineBankingApp
        </button>
        <button onClick={handleItem} className="project-item">
          GlassPortfolio
        </button>
        <button onClick={handleItem} className="project-item">
          Denoising Image
        </button>
        <button onClick={handleItem} className="project-item">
          Pruning of LLM
        </button>
      </div>
    </>
  );
}

export default Projects;
