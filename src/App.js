import './App.css';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Projetos from './components/Projetos/Projetos'
import Contact from './components/Contact/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />        
        <Route path="/projetos" element={<Projetos />} />        
        <Route path="/contato" element={<Contact />} />        

      </Routes>

    </Router>
  )
}

export default App;
