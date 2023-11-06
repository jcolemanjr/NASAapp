import React,{useState, useEffect} from "react";
import Cards from "./Cards";
import Search from "./Search";

function UserGallery({user}){
    const [cards,setCards]=useState([])
    const [search,setSearch]=useState('')
    
    useEffect(() => {
        fetch("")
        .then((res) => res.json())
        .then((data) => setCards(data));
      }, [])

    if (cards >0){
        filteredUserCards = cards.filter(card=>{
            card.title.toLowerCase().includes(search.toLowerCase())
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