import React,{useState} from "react";
import Search from "./Search";
import Cards from "./Cards";
import '../styles.css';


function Gallery({cards}){

    const [search,setSearch]=useState('')


    
    const filtered = cards.filter( card => (
        //  card.title?.toLowerCase().includes(search.toLowerCase())
            card.title?.toLowerCase().includes(search.toLowerCase()) ||
            card.explanation?.toLowerCase().includes(search.toLowerCase()) ||
            card.date?.toLowerCase().includes(search.toLowerCase()) ||
            card.copyright?.toLowerCase().includes(search.toLowerCase()) ||
            card.media_type?.toLowerCase().includes(search.toLowerCase())
        ))
    

    return (
    <div>
        <Search setSearch = {setSearch}/>
        <Cards filteredcard = {filtered}/>
    </div>
    )
}

export default Gallery