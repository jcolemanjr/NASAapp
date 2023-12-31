import React from "react";

function Card({id, title, date, explanation, copyright, media_type, url, hd_url, onClick }) {
    function handleClick(e) {
        e.stopPropagation();
        fetch('/save_media', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                media_id: id,
            }),
        })
        .then((resp) => {
            if (resp.ok) {
                // Add logic here if needed for a successful response
                console.log('Media saved successfully');
            } else {
                throw new Error('Failed to save media');
            }
        })
        .catch((error) => console.error('Error saving media:', error));
    }

    return (
        <div className="card">
            <img  onClick={onClick} src={hd_url} alt={title} />
            <div>
                <h3>{title}</h3>

                <h3>Date</h3>
                <p>{date}</p>

                <h3>Explanation:</h3>
                <p>{explanation}</p>

                <h3>Copyright</h3>
                <p>{copyright}</p>

                <h3>Media Type</h3>
                <p>{media_type}</p>

                
                <button onClick={handleClick}>Save to Gallery</button>
            </div>
        </div>
    );
}

export default Card;