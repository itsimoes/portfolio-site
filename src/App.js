import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from './components/About/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />        

      </Routes>

    </Router>
  )
}

export default App;
