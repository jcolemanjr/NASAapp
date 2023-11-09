import React from "react";
import Card from "./Card";

function Cards({filteredcard, onCardClick}){
    
    // onClick = {e => onCardClick()}
    
    const mappedcard = filteredcard.map( card=> (<Card key={card.id} id={card.id} title={card.title} date={card.date} explanation={card.explanation} copyright={card.copyright} media_type={card.media_type} url={card.url} hd_url={card.hd_url} onClick={() => onCardClick(card)}/>))

        return (
        <div className="card-container">
        {mappedcard}
        </div>
        )
}

export default Cards