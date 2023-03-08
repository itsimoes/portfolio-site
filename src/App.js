import "./App.css";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projetos from "./components/Projetos/Projetos";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/portfolio-site" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
