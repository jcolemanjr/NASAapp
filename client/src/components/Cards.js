import React from "react";
import Card from "./Card";

function Cards({filteredcard}){
    
    const mappedcard = filteredcard.map( card=> (<Card key={card.id} id={card.id} title={card.title} date={card.title} explanation={card.explanation} copyright={card.copyright} media_type={card.media_type} url={card.url} hd_url={card.hd_url} />))

        return (
        <div className="card-container">
        {mappedcard}
        </div>
        )
}

export default Cards