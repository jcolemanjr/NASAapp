import React,{useState} from "react";
import Search from "./Search";
import Cards from "./Cards";

function Gallery({cards}){

    const [search,setSearch]=useState('')
    
    filtered = cards.filter( card => {
        card.title.toLowerCase().includes(search.toLowerCase())
    })
    

    return (
    <div>
        <Search setSearch = {setSearch}/>
        <Cards filteredcard = {filtered}/>
    </div>
    )
}

export default Gallery