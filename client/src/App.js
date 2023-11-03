import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

function App() {

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=ydiBQOFHq3jZVbsUXJBMHmZfnab2O2IQpSpAdnAF&start_date=2023-10-01&end_date=2023-11-01')
    .then((res) => res.json())
    .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
