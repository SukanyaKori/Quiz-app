import React from 'react';
import './App.css';
import Quiz from './my component/Quiz';
import { Route, Routes } from "react-router-dom"
import Home from './my component/Home';




function App() {

  
  return (

    
      
      <Routes>
        
        <Route exact path="/" element={<Home />} />
    
        <Route exact path="/quiz" element={<Quiz />} />
          
      </Routes>

    



  

  );
}

export default App;
