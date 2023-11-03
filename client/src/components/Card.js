import React from "react";

function Card({title, date, explanation, copyright, media_type, url, hd_url}){

    const cardInfo = <div>
        <h3>Title</h3>
        <p>{title}</p>

        <h3>Date</h3>
        <p>{date}</p>

        <h3>Explanation</h3>
        <p>{explanation}</p>

        <h3>Copyright</h3>
        <p>{copyright}</p>

        <h3>Media Type</h3>
        <p>{media_type}</p>
    </div>
    
    return (
    <div>
        <img src={hd_url} alt={title} />
        {cardInfo}
    </div>
    ) 
}

export default Card