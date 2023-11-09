import React, { useState, useEffect } from "react";
import Search from "./Search";
import UserCard from "./UserCard";
import "../styles.css";

function UserGallery({ setUser }) {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/personal_gallery")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((error) =>
        console.error("Error fetching personal_gallery:", error)
      );

    fetch("/check_session")
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error("Response not OK");
        }
      })
      .then((data) => {
        if (data) {
          console.log("Data received from check_session:", data);
          setUser(data);
        } else {
          throw new Error("Empty response from check_session");
        }
      })
      .catch((error) => console.error("Error checking session:", error));
  }, []);

  if (cards.length > 0) {
    const filteredUserCards = cards.filter((card) => {
      return card.title.toLowerCase().includes(search.toLowerCase());
    });

    function onhandleDelete(id) {
      const deletedcard = filteredUserCards.filter((card) => card.id !== id);
      setCards(deletedcard);
    }

    const mappedCard = filteredUserCards.map((card) => (
      <div className="user_card" key={card.id}>
        <UserCard
          id={card.id}
          title={card.title}
          date={card.date}
          explanation={card.explanation}
          copyright={card.copyright}
          media_type={card.media_type}
          url={card.url}
          hd_url={card.hd_url}
          onhandleDelete={onhandleDelete}
        />
      </div>
    ));

    return (
      <div>
        <div className="search-container">
          <Search setanotherSearch={setSearch} />
        </div>
        <div className="card-container">{mappedCard}</div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default UserGallery;
