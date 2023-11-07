import React from "react";

function Card({id,title, date, explanation, copyright, media_type, url, hd_url}){

    function handleClick(e){
        fetch('/save_media',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id 
            }),
          })
        .then(resp => resp.json())
    }

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
        <button onClick={handleClick} >Add to favorite </button>
    </div>
    ) 
}

export default Card