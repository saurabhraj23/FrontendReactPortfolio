import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import DefaultPage from "./components/DefaultPage";

function App() {
  return (
    <div className="main">
      <Router>
        <Heading />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<DefaultPage />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
