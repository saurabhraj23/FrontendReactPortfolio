import React, { useEffect, useState } from "react";
import "../styles/experience.css";

function Experience() {
  const [process, setProcess] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      setProcess((prev) => {
        let temp = [...prev];
        if (temp.length === 3) {
          setProcess([]);
          temp[""];
        } else {
          temp.push(".");
        }
        console.log(temp);

        return temp;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="experience-left-side"></div>
      <div className="experience-right-side">
        <div>
          <span>KPMG,Bangalore</span>
          <span>
            <span>Feb,2023 - </span> <span> Present</span>
          </span>
        </div>
        <div>
          <div className="internship-details">
            <span>
              <span>&gt;</span>
              <span>Internship</span>
            </span>
            <span>
              <span>_Banking App</span>
              <span>
                • Secured the SpringBoot App by implementing the security inside
                the app.
              </span>
              <span>
                • Used RSA algorithm for encrypting the password for better
                safety.
              </span>
              <span>
                • Used MySQL database for storing the details in the table.
              </span>
            </span>
          </div>
          <div className="fte-details">
            <span>
              <span>&gt;</span>
              <span>Full-Time</span>
            </span>
            <span>
              <span>
                <span>_Large Language Model</span>
                <span>
                  • Implemented the User-Management Page using the Postgres
                  Database.
                </span>
                <span>
                  • Reduced the size of the Huggingface LLM model by
                  approximately 50% by implementing quantization techniques,
                  such as 8-bit low-precision techniques.
                </span>
                <span>
                  • Pruned the weights in LLM model by using unstructured
                  pruning technique.
                </span>
              </span>
              <span>
                <span>_Web Development</span>
                <span className="current-working">
                  <span>
                    Currently, working as Web Developer for a client in KPMG{" "}
                  </span>

                  <span>{process}</span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
