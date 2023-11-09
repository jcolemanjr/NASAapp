import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import UserGallery from './UserGallery';
import Home from "./Home";
import Gallery from "./Gallery";
import LoginLogout from "./LoginLogout";
import '../styles.css';

function App() {

  const [cards,setCards]=useState([])
  const [user,setUser]=useState(null)

  useEffect(() => {
    fetch("/media")
      .then((res) => res.json())
      .then((data) => setCards(data));
  },[])

  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/gallery'>
          {cards.length > 0 ? (
            <div>
              <h1>Gallery</h1>
              <Gallery cards={cards}/>
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
        </Route>
        <Route exact path='/login'>
          <LoginLogout setUser={setUser} user={user}/>
        </Route>
        <Route exact path='/usergallery'>
          {user ? <UserGallery setUser={setUser}/> : <h1>To see this content, please log in or sign up</h1>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
