import React from 'react'
import './Home.scss';
import ContainerImages from './HomeImageContainer';
import Carousel from './Carousel';
import Featured from './Featured';
import PromotingArticle from './PromotingArticle';
import products from '../data/allProductsData';
import playstationGames from '../data/playstationGamesData';

function Home(props) {
    return (
        <div className="home">
            <ContainerImages />
            <Carousel title={'FEATURED'}  addSavedItem={props.addSavedItem} savedItems={props.savedItems} featuredArray={products} />
            <PromotingArticle /> 
            <Featured title={'LATEST GAMES'}  addSavedItem={props.addSavedItem} savedItems={props.savedItems} featuredArray={playstationGames} />
        </div>
    )
}

export default Home
