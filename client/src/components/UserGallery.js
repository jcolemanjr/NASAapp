import React,{useState, useEffect} from "react";
import Search from "./Search";
import UserCard from "./UserCard";

function UserGallery({user}){
    const [cards,setCards]=useState([])
    const [search,setSearch]=useState('')
    
    useEffect(() => {
        fetch("/personal_gallery")
        .then((res) => res.json())
        .then((data) => setCards(data));
      }, [])

    if (cards >0){
        const filteredUserCards = cards.filter(card=>{
            return card.title.toLowerCase().includes(search.toLowerCase())
        })

        function onhandleDelete(id){
            const deletedcard = filteredUserCards.filter(card => card.id !== id)
            setCards(deletedcard)
        }

        return (
            <>
            <Search setanotherSearch={setSearch}/>
            <UserCard cards={filteredUserCards} onhandleDelete={onhandleDelete}/>
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