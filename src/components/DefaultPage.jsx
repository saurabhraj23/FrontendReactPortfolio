import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import java from "../assets/java.png";
import py from "../assets/py.png";
import html from "../assets/html.png";
import cpp from "../assets/cpp.png";
// import python from "../assets/python.png"; // Uncomment if needed

import "../styles/default-page.css";
import "../styles/App.css";

function DefaultPage() {
  const [canSee, setCanSee] = useState(false);
  const name_ = ["_", "S", "a", "u", "r", "a", "b", "h", " ", "R", "a", "j"];
  const [name, setName] = useState(name_);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCanSee((prevCanSee) => !prevCanSee);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setName((prev) => {
        let temp = [...prev];

        let index = temp.indexOf("_");

        if (index === temp.length - 1) {
          setName(name_);
          clearInterval(interval);
          setReset(true);
        } else {
          let k = temp[index];
          temp[index] = temp[index + 1];
          temp[index + 1] = k;
        }
        return temp;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [reset]);

  return (
    <>
      <div className="rightSide">
        <div>
          <h3>
            {canSee ? <span>&#9995; </span> : <span>&#128075; </span>}
            Hi There, I am
          </h3>
          <h1>
            {name.map((item) => {
              if (item === "_") {
                return (
                  <span key={item} className="underscore">
                    {item}
                  </span>
                );
              } else {
                {
                  return item;
                }
              }
            })}
          </h1>
          <h2>
            <span>&gt;</span>Software Developer
          </h2>
        </div>
        <div>
          <h4>//find my github profile link</h4>
          <h4>
            <span>const</span> <span>githublink</span> =
            <span> https://github.com/saurabhraj23</span>
          </h4>

          <span>
            &gt;{" "}
            <Link to={"https://www.github.com/saurabhraj23"}>
              print(<span>githublink</span>)
            </Link>
            <span>_</span>
          </span>
        </div>
      </div>
      <div className="sidebar">
        <img src={java} alt="java" />
        <img src={py} alt="python-noise" />
        <img src={html} alt="html" />
        <img src={cpp} alt="c++" />
        {/* <img src={python} alt="python-ai" /> */}
      </div>
    </>
  );
}

export default DefaultPage;
