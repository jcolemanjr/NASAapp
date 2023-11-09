import React from "react";

function UserCard({ id, title, date, explanation, copyright, media_type, url, hd_url, onhandleDelete}){

    function handleDelete(e){
        fetch(`/delete_media/${id}`,{
            method: "DELETE",}
        )
        .then(resp => resp.json())
        .then(onhandleDelete(id))
    }
    
    const cardInfo = <div>
        <h3>Title</h3>
        <p>{title}</p>

        <h3>Date</h3>
        <p>{date}</p>

        <h3>Explanation</h3>
        <p>{explanation}</p>

        <h3>Media Type</h3>
        <p>{media_type}</p>

        <button onClick={()=>handleDelete(id)} >Delete </button>
    </div>

    return (
        <div className>
        <img src={hd_url} alt={title} />
        {cardInfo}
        </div>
    )
}

export default UserCard