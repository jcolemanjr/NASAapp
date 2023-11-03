import React from "react";
import Card from "./Card";

function Cards({filteredcards}){

    const mappedcard = filteredcards.map(card=>{<Card key={card.id} title={card.title} date={card.title} explanation={card.explanation} copyright={card.copyright} media_type={card.media_type} url={card.url} hd_url={card.hd_url} />})


    return (
    <div className="card-container">
    {mappedcard}
    </div>
    )
}

export default Cards