
import React, { useState, useEffect} from 'react';
import { FaEuroSign } from "react-icons/fa";
import './ShoppingCart.scss';


function ShoppingCart(props) {
    const [ totalPrice, setTotalPrice] = useState(0);
    const [ itemCount, setItemCount ] = useState(0);

    const displayRequiredAge = (item) => {
        if(item.minimumAge) {
            return ( <p className="color-text-container"> EGI Rating: Ages <span className="color-text">{item.minimumAge}</span> <span className="color-text">and Over </span>  | <span className="color-text">{item.releaseDate}</span> </p>)
        } else {
            return (<p className="color-text-container">Release Date:  <span className="color-text">{item.releaseDate}</span> </p>)
        }
    }

    // Price

    const calculateTotalPrice = () => {
        let total = 0;
        for (let i = 0; i < props.basket.length; i++) {
           total += (props.basket[i].price * props.basket[i].quantity);
        }

        setTotalPrice(total.toFixed(2))
       
    }

    const calculateTotalItems = () => {
        let itemCount = 0;
        for (let i = 0; i < props.basket.length; i++) {
           itemCount += props.basket[i].quantity;
        }
        setItemCount(itemCount)
       

    }


    useEffect(() => {
        calculateTotalPrice();
        calculateTotalItems();
    })

    // Basket 
    
    const fillShoppingCart = props.basket.map((item, index) => {
        return (<div className="product-card" key={index}>
            <div className="img"  style={{backgroundImage: `url(${item.image})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'contain'}}/>
        
            <div className="text-container">

                    <p>{item.category}</p>
                    <h5>{item.name}</h5>
                    {displayRequiredAge(item)}
                    <div className="quantity-container">
                        <button onClick={() => {changeQty(item.id, -1); setTimeout(deleteItemFromBasket(item.id, item.quantity),2000)}}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => changeQty(item.id, 1)}>+</button>
                    </div>
                
            </div>
                
                    <h2 className="price"><FaEuroSign style={{fontSize: '0.7em'}} />{item.price}</h2>
                
        </div>)
    });

    const changeQty = (id, delta) =>
   props.setBasket(
    props.basket.map(
    (item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item)
        )
    );
    
    const deleteItemFromBasket= (id, quantity) => {
        if(quantity < 2) props.setBasket(props.basket.filter(item => item.id !== id));
    };

           
    return (
        <div className="shopping-cart">
            <div className="shopping-cart-content">
                <h1>Your Shopping Bag</h1>
                {fillShoppingCart}
            </div>
            <div className="proceed-checkout-container">
               <h1>Total ({itemCount} Items): <span className="price">{totalPrice}<FaEuroSign /></span>  </h1>
                <button>Proceed to Checkout</button>

            </div>
        </div>
    )
}

export default ShoppingCart
