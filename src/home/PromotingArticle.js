import React from 'react';
import { Link } from 'react-router-dom';
import './PromotingArticle.scss';
import horizon from "./images/horizon.jpeg";
import playstationGames from '../data/playstationGamesData';
import xboxGames from '../data/xboxGamesData';
import nintendoGames from '../data/nintendoGamesData';



function PromotingArticle(props) {
    console.log('Promoting article', props)
    return (
        <div className="promoting-article-container">
            <img alt={''} src={horizon}/>
            <div>
                <h1> Give him adventures, not socks.</h1>
                <p>Time to change things up? This Father’s Day, give your favourite dad an unforgettable experience.</p>
                <Link to="/shop">
                    <button onClick={() => {
                        props.setCategory([...playstationGames, ...xboxGames, ...nintendoGames]);
                        props.setTitle('Video Games')}}>Explore games</button>
                 </Link>

            </div>
            
        </div>
    )
}

export default PromotingArticle
