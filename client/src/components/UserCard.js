import React from "react";

function UserCard({id,title, date, explanation, copyright, media_type, url, hd_url, onhandleDelete}){

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

        <h3>Copyright</h3>
        <p>{copyright}</p>

        <h3>Media Type</h3>
        <p>{media_type}</p>
    </div>

    return (
        <div>
        <img src={hd_url} alt={title} />
        {cardInfo}
        <button onClick={()=>handleDelete(id)} >Delete </button>
        </div>
    )
}

export default UserCard