import React from 'react'
import './Home.scss';
import ContainerImages from './HomeImageContainer';
import Featured from './Featured';
import PromotingArticle from './PromotingArticle';

function Home(props) {
    return (
        <div className="home">
            <ContainerImages />
            <Featured addSavedItem={props.addSavedItem} savedItems={props.savedItems} />
            <PromotingArticle /> 
        </div>
    )
}

export default Home
