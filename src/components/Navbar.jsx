import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navBar = [
    { path: "/", label: "_home" },
    { path: "/experience", label: "_experience" },
    { path: "/education", label: "_education" },
    { path: "/projects", label: "_projects" },
    { path: "/contacts", label: "_contact-me" },
  ];

  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <nav>
      {navBar.map((element, idx) => (
        <Link key={idx} to={element.path}>
          <button
            className={activeIndex === idx ? "active" : ""}
            onClick={() => {
              setActiveIndex(idx);
            }}
          >
            {element.label}
          </button>
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
