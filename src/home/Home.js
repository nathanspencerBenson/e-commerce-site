import React from 'react'
import ContainerImages from './HomeImageContainer';
import Featured from './Featured';
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <ContainerImages />
            <Featured />
            
        </div>
    )
}

export default Home
