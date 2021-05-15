import React from 'react'
import ContainerImages from './HomeImageContainer';
import Featured from './Featured';
import './Home.scss';

function Home(props) {
    return (
        <div className="home">
            <ContainerImages />
            <Featured addSavedItem={props.addSavedItem} savedItems={props.savedItems} />
            
        </div>
    )
}

export default Home
