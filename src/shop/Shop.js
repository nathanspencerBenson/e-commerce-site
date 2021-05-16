import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import ProductCard from '../ProductCard';
import allProducts from '../data/allProductsData';
import playstationGames from '../data/playstationGamesData';
import xboxGames from '../data/xboxGamesData';
import { consolesData } from '../data/consolesData';
import nintendoGames from '../data/nintendoGamesData';
import "./Shop.scss";

function Shop(props) {

    const [ category, setCategory] = useState([...allProducts]);
    const [ title, setTitle ] = useState('All Products');

    const selectCategory = (categorySelected, titleDisplay) => {
        setCategory([...categorySelected]);
        setTitle(titleDisplay);


    }

    const displayProducts = (productType) => {
        const products = productType.map((item, index) => {
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
                    <li onClick={() => selectCategory([...playstationGames, ...xboxGames], 'Video Games')}>VIDEO GAMES</li>
                </ul>


            </div>
            <div className="products-container">
                <header><h1>{title}</h1>  <p>{category.length} results</p></header>
            <div className="immortals-image"></div>
            {displayProducts(category)}
            </div>

            
        </div>
    )
}

export default Shop
