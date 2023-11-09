import React from "react";
import "../styles.css";

function Interstitial({ card, onClose }) {
    return (
        <div className="interstitial" onClick={onClose}>
            <div className="interstitial-content">
                <img onClick={onClose} className="interimage" src={card.hd_url} alt={card.title} />
            </div>
        </div>
    );
}

export default Interstitial;