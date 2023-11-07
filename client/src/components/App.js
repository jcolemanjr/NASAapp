import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import UserGallery from './UserGallery';
import Home from "./Home";
import Gallery from "./Gallery";
import Login from "./Login_Logout";

function App() {

  const [cards,setCards]=useState([])
  const [user,setUser]=useState(null)

  // useEffect(() => {
  //   fetch('https://api.nasa.gov/planetary/apod?api_key=ydiBQOFHq3jZVbsUXJBMHmZfnab2O2IQpSpAdnAF&start_date=2023-10-01&end_date=2023-11-01')
  //   .then((res) => res.json())
  //   .then((data) => setCards(data));

    useEffect(() => {
      fetch("/media")
        .then((res) => res.json())
        .then((data) => setCards(data));
    

    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
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
          {cards.lengh>0 ? <Gallery cards={cards}/>: <h1>Loading...</h1>}
        </Route>
        <Route exact path='/login'>
          <Login setUser={setUser} user={user}/>
        </Route>
        <Route exact path='/usergallery'>
        {user?<UserGallery user={user}/>:<h1>For see this content login or signup</h1> }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
