import React, { useEffect } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { FaEuroSign, FaRegHeart } from "react-icons/fa";
import './Carousel.scss';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel(props) {
    const featured = props.featuredArray.filter(item => item.featured);

      useEffect(() => {
         props.setFeaturedArray(props.shuffle(props.featuredArray))

      }, [])



    const carasouelDisplay = featured.map((item, index) => {
        return(
            <div className="carasouel-featured-item" key={index}>
                        <span className="favouriteIcon">
                        <FaRegHeart onClick={(e) => {
                            e.target.classList.toggle('favouriteIcon-active');
                             props.addSavedItem(item);
                            }} />

                        </span>
                <Link to={"/shop"}>
                    <div>
                        <div className="img" style={{backgroundImage: `url(${item.image})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'contain'}}/>
                        <h2>{item.name}</h2>
                        <p>{item.shortDescription}</p>
                        <h2 class="price"><FaEuroSign style={{fontSize: '0.7em'}} />{item.price}</h2>
                    </div>
                </Link>
            </div>
        )
    })

    const responsive = {
        0: { items: 0 },
        150: { items: 2 },
       768: { items: 3 },
        1024: { items: 4 },
    };
    

    return (
        <div>
            <div className="carousel-container">
            <h1>{props.title}</h1>
            <AliceCarousel mouseTracking controlsStrategy="responsive" autoHeight="auto"  responsive={responsive} className="featured-items-container">
                {carasouelDisplay}
            </AliceCarousel>
            </div>
        </div>
    )
}

export default Carousel
