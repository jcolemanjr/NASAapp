import React,{useState, useEffect} from "react";
import Cards from "./Cards";

function UserGallery(){
    const [user, setUser] = useState(null);
    const [cards,setCards]=useState([])
    
    useEffect(() => {
        fetch("")
        .then((res) => res.json())
        .then((data) => setCards(data));
      }, [])

    return (
        <>
        {cards>0 ? <Cards cards={cards}/>: <h1>Loading...</h1>}
        </>
    )
}

export default UserGallery