import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import ProductCard from '../ProductCard';
import allProducts from '../data/allProductsData';
import playstationGames from '../data/playstationGamesData';
import xboxGames from '../data/xboxGamesData';
import { consolesData } from '../data/consolesData';
import nintendoGames from '../data/nintendoGamesData';
import "./Shop.scss";

function Shop(props) {

 const videoGames = [...playstationGames, ...xboxGames, ...nintendoGames];

 useEffect(() => {
     props.shuffle(playstationGames);
     props.shuffle(xboxGames);
     props.shuffle(nintendoGames);
     props.shuffle(videoGames);
     props.shuffle(allProducts);
 }, [])

    const selectCategory = (categorySelected, titleDisplay) => {
        props.setCategory([...categorySelected]);
        props.setTitle(titleDisplay);
    

    }

    const displayProducts = (category) => {
        const products = category.map((item, index) => {
            return (
                <ProductCard item={item} index={index} key={index} addSavedItem={props.addSavedItem} />
                
            )
        })

        return products

    }
    return (
        <div className="shop">
            <div className="categories-container">

                <h1>Categories</h1>
                <ul>
                    <li onClick={() => selectCategory(allProducts, 'All Products')}>ALL PRODUCTS</li>
                    <li onClick={() => selectCategory(consolesData, 'Consoles')}>CONSOLES</li>
                    <li onClick={() => selectCategory(playstationGames, 'Playstation')}>PLAYSTATION </li>
                    <li onClick={() => selectCategory(xboxGames, 'Xbox')}>XBOX</li>
                    <li onClick={() => selectCategory(nintendoGames, 'Nintendo')}>NINTENDO</li>
                    <li onClick={() => selectCategory(videoGames, 'Video Games')}>VIDEO GAMES</li>
                </ul>


            </div>
            <div className="products-container">
                <header><h1>{props.title}</h1>  <p>{props.category.length} results</p></header>
            {displayProducts(props.category)}
            </div>

            
        </div>
    )
}

export default Shop
