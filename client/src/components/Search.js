import React from "react";

function Search({setSearch}){
    return (
        <input className="searcher"
         type="text" 
         name="searchBar" 
         placeholder="Search..." 
         onChange={e=>setSearch(e.target.value)}/>
    )
}

export default Search