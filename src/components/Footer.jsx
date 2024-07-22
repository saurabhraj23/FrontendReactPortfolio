import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span>find me on</span> <span>&nbsp;:</span>
        <Link to={"https://www.linkedin.com/in/saurabhraj239/"}>
          <span>
            &nbsp;linked
            <FaLinkedin />
          </span>
        </Link>
      </div>
      <div>
        <span>Email</span> <span> :</span>
        <span> saurabhraj239@gmail.com</span>
      </div>
    </footer>
  );
}

export default Footer;
