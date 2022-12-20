import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const[swtText, setSwtText]= useState('Dark Mode');
  const[mode, setMode]= useState('light');
  const togglemode=()=>{
    if(mode === 'light'){
      setMode('dark');
      setSwtText('Light Mode');
      document.body.style.backgroundColor="#888888";
    }else{
      setMode('light');
      setSwtText('Dark Mode');
      document.body.style.backgroundColor="#e2d0bc";
    }
  }
  return (
    <> 
    <Router>
      <Navbar title="Textutiles"  abt="About us" mode={mode} togglemode= {togglemode} swtext={swtText} />    
      <div className="container my-3">
<Routes>
          <Route exact path="/" element={ <Textform heading="Enter Text To Analize" mode={mode}/>} />
          <Route exact path="/about" element={<About/>} />
          </Routes>
          </div>
</Router>
</>
  );
}

export default App;
