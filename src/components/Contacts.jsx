import React, { useState } from "react";
import "../styles/contact-me.css";
import envelop from "../assets/contact-me.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contacts() {
  const [formData, setFormData] = useState({
    gender: "",
    fname: "",
    email: "",
    message: "",
  });

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="contact-me-left-side"></div>
      <div className="contact-me-right-side">
        <div className="contact-me-left">
          <span>
            Let's connect on something <span>great</span> together
          </span>
          <span className="image">
            <img src={envelop} alt="contact-me"></img>
            <span className="circle"></span>
          </span>
          <span className="contact-details">
            <span>
              {" "}
              <MdOutlineEmail />{" "}
            </span>
            <span>saurabhraj239@gmail.com</span>
          </span>
          <span className="contact-details">
            <span>
              <BsTelephone />{" "}
            </span>
            <span>+918292334778</span>
          </span>
          <span className="contact-details">
            <span>
              <FaLinkedin />
            </span>{" "}
            <span>
              <a href="https://www.linkedin.com/in/saurabhraj239/">LinkedIn</a>
            </span>
          </span>
          <span className="contact-details">
            <span>
              <FaGithub />
            </span>{" "}
            <span>
              <a href="https://github.com/saurabhraj23">GitHub</a>
            </span>
          </span>
        </div>
        <div className="contact-me-right">
          <form onSubmit={handleSubmit}>
            <div className="contact-me-form-heading">
              <span>_contact me</span>
            </div>
            <div className="radio">
              <span>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  required={true}
                  value="male"
                  onChange={handleFormData}
                />
                <label htmlFor="male">Male</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  required={true}
                  value="female"
                  onChange={handleFormData}
                />
                <label htmlFor="female">Female</label>
              </span>
            </div>
            <div className="fields">
              <label htmlFor="fname">Your Name</label>
              <input
                type="text"
                id="fname"
                placeholder="Enter your Full Name"
                name="fname"
                required={true}
                value={formData.fname}
                onChange={handleFormData}
              />
            </div>
            <div className="fields">
              <label htmlFor="email">Your Email</label>
              <input
                type="text"
                id="email"
                placeholder="example@email.com"
                name="email"
                required={true}
                value={formData.email}
                onChange={handleFormData}
              />
            </div>
            <div className="fields">
              <label htmlFor="message">Your Message</label>
              <textarea
                type="text"
                id="message"
                placeholder="Message"
                name="message"
                required={true}
                rows={6}
                value={formData.message}
                onChange={handleFormData}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contacts;
