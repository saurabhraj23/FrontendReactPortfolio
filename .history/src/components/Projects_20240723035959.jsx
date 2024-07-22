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
            <span>OnlineBankingApp</span>
          </button>
        </Link>
        <Link to={"https://github.com/saurabhraj23/Glass-Portfolio"}>
          <button className="project-item">
            <span>
              <span className="skills">
                <span className="skill-heading">Skills Used :</span>
                <span>HTML , CSS , Javascript</span>
              </span>
              <span>
                The Website consists of some animation with glass design
                interface.Javascript DOM is used to perform click event.CSS
                property is extensively used to give the portfolio website a
                desirable look.
              </span>
            </span>
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
                <span className="skill-heading">Skills Used :</span>
                <span>Python , Flask , HuggingFace-cli , Linux</span>
              </span>
              <span>
                The Project aimed to demonstrate the capabilities of Kortex in
                enhancing AI-based operations within KPMG.I successfully
                completed the objectives assigned to me by implementing User
                Management functionalities and Optimizing and Prunining LLM
                models within Kortex,using pruning and quantisation.
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
