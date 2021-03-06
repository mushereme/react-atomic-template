import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from './Home';
import Aboutus from './Aboutus';

import "../styles/global.css";
import "../styles/tailwind.css";

const App = () => {
    
  return (
    <Router>  
      <Suspense fallback=""> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Suspense>
    </Router> 
  )
}

export default App;
