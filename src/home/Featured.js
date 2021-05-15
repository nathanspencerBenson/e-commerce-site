import React, { useState } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { FaEuroSign, FaRegHeart } from "react-icons/fa";
import './Featured.scss';

function Featured(props) {
    const featured = props.featuredArray.filter(item => item.featured);


    const featuredDisplay = featured.map((item, index) => {
        return(
            <div className="featured-item" key={index}>
                        <FaRegHeart className="favouriteIcon" onClick={(e) => {
                            e.target.classList.toggle('favouriteIcon-active');
                             props.addSavedItem(item);
                            }} />
                <Link to={"/shoppingcart"}>
                    <div>
                        <div className="img"  style={{backgroundImage: `url(${item.image})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'contain'}}/>
                        <h2>{item.name}</h2>
                        <p>{item.shortDescription}</p>
                        <h2 class="price"><FaEuroSign style={{fontSize: '0.7em'}} />{item.price}</h2>
                    </div>
                </Link>
            </div>
        )
    })
    

    return (
        <div className="featured-container">
            <h1>Featured</h1>
            <div className="featured-items-container">
                {featuredDisplay}
            </div>
            
        </div>
    )
}

export default Featured
