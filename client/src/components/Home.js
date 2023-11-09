import React, { useState, useEffect } from 'react';
import '../Home.css';

function Home() {

    const [apodData, setApodData] = useState([]);

    useEffect(() => {

        const apiKey = 'ydiBQOFHq3jZVbsUXJBMHmZfnab2O2IQpSpAdnAF';

        const today = new Date();
        const startDate = new Date();
        startDate.setDate(today.getDate() - 14);

        const formatDate = (date) => date.toISOString().split('T')[0];

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${formatDate(startDate)}&end_date=${formatDate(today)}`)
            .then(response => response.json())
            .then(data => {
                setApodData(data);
            })
            .catch(error => {
                console.error('Error fetching APOD data:', error);
            });
    }, []);
    
    const doubledApodData = [...apodData, ...apodData];

    return (
        <div className='imageContainer'>
            <h1>Welcome, to the NASA APOD Viewer!</h1>
            <h2>Make an account or login and save images from our gallery to your own personal gallery</h2>
            <div className="marquee">
                <div className="marquee-content">
                    {doubledApodData.map((item, index) => (
                        item.media_type === 'image' && (
                            <div key={index} className="image-container">
                                <img src={item.url} alt={item.title}/>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;