import React from 'react';
import './PromotingArticle.scss'
import horizon from "./images/horizon.jpeg"

function PromotingArticle() {
    return (
        <div className="promoting-article-container">
            <img src={horizon}/>
            <div>
                <h1> Give him adventures, not socks.</h1>
                <p>Time to change things up? This Father’s Day, give your favourite dad an unforgettable experience.</p>
                <button>Explore games</button>

            </div>
            
        </div>
    )
}

export default PromotingArticle
