import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pokemon-list" element={<Pokelist />} /> */}

      </Routes>

    </Router>
  )
}

export default App;
