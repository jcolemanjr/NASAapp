
import './App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import UserGallery from './UserGallery';

function App() {

  const [cards,setCards]=([])
  const [user,setUser]=(null)

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=ydiBQOFHq3jZVbsUXJBMHmZfnab2O2IQpSpAdnAF&start_date=2023-10-01&end_date=2023-11-01')
    .then((res) => res.json())
    .then((data) => setCards(data));

    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
  })


  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/gallery'>
          {cards.lengh>0 ? <Gallery cards={cards}/>: <h1>Loading...</h1>}
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/usergallery'>
        {user?<UserGallery />:<h1>For see this content login or signup</h1> }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
