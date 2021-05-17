import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { FaEuroSign, FaRegHeart } from "react-icons/fa";
import './ProductCard.scss';
import { HiOutlineShoppingBag } from 'react-icons/hi';

function ProductCard(props, index) {

    const displayRequiredAge = () => {
        if(props.item.minimumAge) {
            return ( <p className="color-text-container"> EGI Rating: Ages <span className="color-text">{props.item.minimumAge}</span> <span className="color-text">and Over </span>  | <span className="color-text">{props.item.releaseDate}</span> </p>)
        } else {
            return (<p className="color-text-container">Release Date:  <span className="color-text">{props.item.releaseDate}</span> </p>)
        }
    }
    return (
        <div className="product-card" key={index}>
                        <FaRegHeart className="favouriteIcon" onClick={(e) => {
                            e.target.classList.toggle('favouriteIcon-active');
                             props.addSavedItem(props.item);
                            }} />
                        
                        
                    <Link to={"/shop"}><div className="img"  style={{backgroundImage: `url(${props.item.image})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'contain'}}/></Link>
                <Link to={"/shop"}>
                    <div className="text-container">
                        <h2>{props.item.name}</h2>
                        {displayRequiredAge()}
                        <p>{props.item.shortDescription}</p>
                        <div className="button-price-container">
                        <h2 className="price"><FaEuroSign style={{fontSize: '0.7em'}} />{props.item.price}</h2>
                        <button><HiOutlineShoppingBag className="button-icon" /> Add To Bag</button>
                        </div>
                    </div>
                </Link>
                
        </div>
    )
}

export default ProductCard
