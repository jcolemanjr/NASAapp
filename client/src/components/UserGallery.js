import React,{useState, useEffect} from "react";
import Cards from "./Cards";
import Search from "./Search";

function UserGallery({user}){
    const [cards,setCards]=useState([])
    const [search,setSearch]=useState('')
    
    useEffect(() => {
        fetch("http://127.0.0.1:5555/media/1")
        .then((res) => res.json())
        .then((data) => setCards(data));
      }, [])

    if (cards >0){
        const filteredUserCards = cards.filter(card=>{
            return card.title.toLowerCase().includes(search.toLowerCase())
        })

        return (
            <>
            <Search setanotherSearch={setSearch}/>
            <Cards cards={filteredUserCards}/>
            </>
        )
    }

    else{
        return(
            <h1>Loading...</h1>
        )
    }
}

export default UserGallery