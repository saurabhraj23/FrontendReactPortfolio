import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div className="projects-left-side"></div>
      <div className="projects-right-side">
        <Link to={"https://github.com/saurabhraj23/OnlineBankingAppKPMG"}>
          <button className="project-item">
            <span>OnlineBankingApp</span>
          </button>
        </Link>
        <Link to={"https://github.com/saurabhraj23/Glass-Portfolio"}>
          <button className="project-item">GlassPortfolio</button>
        </Link>
        <Link to={"https://github.com/saurabhraj23/Denoising-Image"}>
          <button className="project-item">Denoising Image</button>
        </Link>
        <Link to={"https://github.com/saurabhraj23/Pruning"}>
          <button className="project-item">Pruning of LLM</button>
        </Link>
      </div>
    </>
  );
}

export default Projects;
