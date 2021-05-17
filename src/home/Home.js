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
            <Carousel title={'FEATURED'} shuffle={props.shuffle}  addSavedItem={props.addSavedItem} savedItems={props.savedItems} setFeaturedArray={props.setFeaturedArray} featuredArray={products} />
            <PromotingArticle setCategory={props.setCategory} setTitle={props.setTitle} /> 
            <Featured title={'LATEST GAMES'}  addSavedItem={props.addSavedItem} savedItems={props.savedItems} featuredArray={playstationGames}  />
        </div>
    )
}

export default Home
