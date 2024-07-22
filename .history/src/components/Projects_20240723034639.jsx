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
            <span> This project\</span>
            <span>OnlineBankingApp</span>
          </button>
        </Link>
        <Link to={"https://github.com/saurabhraj23/Glass-Portfolio"}>
          <button className="project-item">
            <span> This project\</span>
            <span>GlassPortfolio</span>
          </button>
        </Link>
        <Link to={"https://github.com/saurabhraj23/Denoising-Image"}>
          <button className="project-item">
            <span>
              <span className="skills">
                <span className="skill-heading">Skills Used</span>
                <span>Python , OpenCV</span>
              </span>
              <span>
                This project was meant to remove the periodic noise from the
                image by using Butterworth Low Pass Filter.
              </span>
            </span>
            <span>Denoising Image</span>
          </button>
        </Link>
        <Link to={"https://github.com/saurabhraj23/Pruning"}>
          <button className="project-item">
            <span>
              <span className="skills">
                <span className="skill-heading">Skills Used</span>
                <span>Python , OpenCV</span>
              </span>
              <span>
                This project was meant to remove the periodic noise from the
                image by using Butterworth Low Pass Filter.
              </span>
            </span>
            <span> Pruning of LLM</span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Projects;
