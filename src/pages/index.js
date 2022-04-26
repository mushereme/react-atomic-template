import React from "react";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";

import Home from './Home';
import Aboutus from './Aboutus';

import "../styles/global.css";
import "../styles/tailwind.css";

const App = () => {
    
  return (
    <Router>  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
      </Routes>
    </Router> 
  )
}

export default App;
