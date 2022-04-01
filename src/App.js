import React from 'react';
import './App.css';
import Quiz from './components/Quiz';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home';




function App() {
  return (
      
      <Routes>
        
        <Route exact path="/" element={<Home />} />
    
        <Route exact path="/quiz" element={<Quiz />} />
          
      </Routes>

  );
}

export default App;
