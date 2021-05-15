import React from 'react'
import './Home.scss';
import ContainerImages from './HomeImageContainer';
import Featured from './Featured';
import PromotingArticle from './PromotingArticle';
import products from '../data/allProductsData';
import playstationGames from '../data/playstationGamesData';

function Home(props) {
    return (
        <div className="home">
            <ContainerImages />
            <Featured addSavedItem={props.addSavedItem} savedItems={props.savedItems} featuredArray={products} />
            <PromotingArticle /> 
            <Featured addSavedItem={props.addSavedItem} savedItems={props.savedItems} featuredArray={playstationGames} />
        </div>
    )
}

export default Home
