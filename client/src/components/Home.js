import React, { useState, useEffect } from 'react';

function Home() {

    const [apodData, setApodData] = useState({
        imageUrl: '',
        title: '',
        date: '',
        explanation: '',
        mediaType: '',
        copyright: ''
    });

    useEffect(() => {

        const apiKey = 'ydiBQOFHq3jZVbsUXJBMHmZfnab2O2IQpSpAdnAF';


        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {

                setApodData({
                    imageUrl: data.url,
                    title: data.title,
                    date: data.date,
                    explanation: data.explanation,
                    mediaType: data.media_type,
                    copyright: data.copyright || ''
                });
            })
            .catch(error => {
                console.error('Error fetching APOD data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Welcome, to the NASA APOD Viewer!</h1>
            <h2>Make an account or login and save images from our gallery to your own personal gallery</h2>
            <h3>{apodData.title}</h3>
            <h3>{apodData.date}</h3>
            {apodData.mediaType === 'image' ? (
                <img src={apodData.imageUrl} alt={apodData.title} />
            ) : (
                <iframe title="space-video" src={apodData.imageUrl} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
            )}
            <p>{apodData.explanation}</p>
            {apodData.mediaType && <h3>Media type: {apodData.mediaType}</h3>}
            {apodData.copyright && <p>© {apodData.copyright}</p>}
        </div>
    );
}

export default Home;