import React,{useState} from "react";
import Search from "./Search";
import Cards from "./Cards";
import Interstitial from './Interstitial';
import '../styles.css';


function Gallery({cards}){

    const [search,setSearch]=useState('')
    const [selectedCard, setSelectedCard] = useState(null); // To keep track of the clicked artwork
    const [showInterstitial, setShowInterstitial] = useState(false); // To show/hide the interstitial

    const handleCardClick = (cardData) => {
        setSelectedCard(cardData);
        setShowInterstitial(true); // Show the interstitial when a card is clicked
    };

    
    const filtered = cards.filter( card => (
        //  card.title?.toLowerCase().includes(search.toLowerCase())
            card.title?.toLowerCase().includes(search.toLowerCase()) ||
            card.explanation?.toLowerCase().includes(search.toLowerCase()) ||
            card.date?.toLowerCase().includes(search.toLowerCase()) ||
            card.copyright?.toLowerCase().includes(search.toLowerCase()) ||
            card.media_type?.toLowerCase().includes(search.toLowerCase())
        ))
    

    return (
    <div>
        <Search setSearch = {setSearch}/>
        <Cards filteredcard = {filtered} onCardClick={handleCardClick}/>
        {showInterstitial && (
                <Interstitial 
                    card={selectedCard} 
                    onClose={() => setShowInterstitial(false)} // Method to close the interstitial
                />
        )}
    </div>
    )
}

export default Gallery