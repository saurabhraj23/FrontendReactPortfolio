import React, { useEffect, useState } from "react";
import "../styles/education.css";

function Education() {
  return (
    <>
      <div className="education-left-side"></div>
      <div className="education-right-side">
        <div className="degrees">
          <span>
            <h2>Birla Institute Of Technology</h2>
            <h4>Mesra,Ranchi,Jharkhand</h4>
            <h3>
              <span>Bachelors in Information Technology - </span>{" "}
              <span>&nbsp;Passed</span>
            </h3>
            <h5>Subjects - Information Technology</h5>
          </span>
          <span>
            <h3 className="degree-year">2019-2023</h3>
            <h4>&nbsp;</h4>
            <h4>&nbsp;</h4>
            <h4>CGPA - 8.2</h4>
          </span>
        </div>
        <div className="degrees">
          <span>
            <h2>Shivam Convent</h2>
            <h4>Patna,Bihar</h4>
            <h3>
              <span>12th - </span> <span>&nbsp;Passed</span>
            </h3>
            <h5>Subjects - Physics,Chemistry,Maths,English,Painting</h5>
          </span>
          <span>
            <h3 className="degree-year">2017</h3>
          </span>
        </div>
        <div className="degrees">
          <span>
            <h2>Radiant International School</h2>
            <h4>Patna,Bihar</h4>
            <h3>
              <span>10th - </span> <span>&nbsp;Passed</span>
            </h3>
            <h5>Subjects - Science,History,Civics,English,Hindi,Maths</h5>
          </span>
          <span>
            <h3 className="degree-year">2015</h3>
          </span>
        </div>
      </div>
    </>
  );
}

export default Education;
