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
    

  //   fetch("/check_session").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   })
    },[])


    const containerStyle = {
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '10px',
      margin: '10px',
      width: '30%',
    };
  
    const imageStyle = {
      maxWidth: '100%',
      height: 'auto',
    };
  
    const titleStyle = {
      fontSize: '18px',
      marginBottom: '5px',
    };
  
    const explanationStyle = {
      fontSize: '14px',
    };
  
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
                {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {cards.map((card, index) => (
                    <div key={index} style={containerStyle}>
                      <h2 style={titleStyle}>{card.title}</h2>
                      <p style={explanationStyle}>{card.explanation}</p>
                      <img src={card.url} alt={card.title} style={imageStyle} />
                    </div>
                  ))}
                </div> */}
              </div>
            ) : (
              <h1>Loading...</h1>
            )}
          </Route>
          <Route exact path='/login'>
            <Login setUser={setUser} user={user}/>
          </Route>
          <Route exact path='/usergallery'>
            {user ? <UserGallery setUser={setUser}/> : <h1>To see this content, please log in or sign up</h1>}
          </Route>
        </Switch>
      </div>
    );
  }
  
  export default App;