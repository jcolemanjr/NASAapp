import React from "react";

function Search({setSearch,setanotherSearch}){
    if(setSearch){
        return (
            <input className="searcher"
             type="text" 
             name="searchBar" 
             placeholder="Search..." 
             onChange={e=>setSearch(e.target.value)}/>
        )
    }

    else if(setanotherSearch){
        return (
            <input className="searcher"
             type="text" 
             name="searchBar" 
             placeholder="Search..." 
             onChange={e=>setanotherSearch(e.target.value)}/>
        )
    }
    
}

export default Search