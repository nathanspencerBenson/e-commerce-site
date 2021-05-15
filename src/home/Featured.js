import React, { useState } from 'react';
import products from '../data/allProductsData';
import { Link, Route, Switch } from "react-router-dom";
import { FaEuroSign, FaRegHeart } from "react-icons/fa";
import './Featured.scss';

function Featured() {
    const featured = products.filter(item => item.featured);


    const featuredDisplay = featured.map((item, index) => {
        return(
            <div className="featured-item" key={index}>
                <div className="favouriteIcon">
                    <Link to="/home" >
                        <FaRegHeart />
                    </Link> 
                </div> 
                <Link to={"/shoppingcart"}>
                    <div>
                        <div className="img"  style={{backgroundImage: `url(${item.image})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'cover'}}/>
                        <h2>{item.name}</h2>
                        <p>{item.spec}</p>
                        <h2><FaEuroSign style={{fontSize: '0.7em'}} />{item.price}</h2>
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
