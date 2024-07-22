import React{useEffect} from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

useEffect(() => {
  const projectItems = document.querySelectorAll(
    ".project-item span:nth-child(1)"
  );

  projectItems.forEach((item) => {
    const text = item.innerText;
    item.innerHTML = ""; // Clear the original text

    text.split("").forEach((letter, index) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.animationDelay = `${index * 0.1}s`; // Adjust the delay for each letter
      span.classList.add("letter");
      item.appendChild(span);
    });
  });
}, []);

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
              Skills Used : Python , OpenCV This project was meant to remove the
              periodic noise from the image by using Butterworth Low Pass
              Filter.
            </span>
            <span>Denoising Image</span>
          </button>
        </Link>
        <Link to={"https://github.com/saurabhraj23/Pruning"}>
          <button className="project-item">
            <span> This project\</span>
            <span> Pruning of LLM</span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Projects;
