
import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import UserGallery from './UserGallery';

function App() {

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=ydiBQOFHq3jZVbsUXJBMHmZfnab2O2IQpSpAdnAF&start_date=2023-10-01&end_date=2023-11-01')
    .then((res) => res.json())
    .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/gallery'>
          <Gallery/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/usergallery'>
          <UserGallery/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
