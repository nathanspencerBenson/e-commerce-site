import React, { useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.scss';
import { IconContext } from 'react-icons';
import emptyChest from "./empty-chest.png";


function Navbar(props) {
    console.log(props)
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    const navItems = SidebarData.map((item, index) => {
        return (
            <li key={index} className={item.cName}>
                <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            </li>
        )
    })


    const deleteSavedItem = (id) => {
        props.setSavedItems(props.savedItems.filter(item => item.id !== id))
        
       

    }
    
    const savedItemsDisplay = () => {
        if (props.savedItems.length === 0) {
            return( <div className="empty-chest-container">
                <div className="empty-chest" style={{backgroundImage: `url(${emptyChest})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'cover'}} />
                <h2>You have no saved items</h2>
                <h4>Fill it with all the items you want to have a look at later!</h4>
            </div>) 
        } else {
            return props.savedItems.map((item, index) => {
                return (
                    <li key={index} id={item.id} className="saved-item">
                        <div className="image" style={{backgroundImage: `url(${item.image})`, backgroundRepeat:  `no-repeat`, backgroundPosition: `center`, backgroundSize: 'cover'}} />
                        <div className="text">
                            <h3>{item.name}</h3>
                            <p>{item.shortDescription}</p>
                            <h4><FaIcons.FaEuroSign />{item.price}</h4>
                        </div>
                            <FaIcons.FaTrashAlt className="deleteIcon" onClick={() => {deleteSavedItem(item.id)}}/>
                    </li>
                )
            })
        }
    }

    return (
        <>
        <IconContext.Provider value={{color: 'black'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} style={{color: 'red'}}/>
                </Link>
                <Link to="/"><h1>
                    Gamer Paradise
                </h1>
                </Link>
                <div className="computer-nav-links">
                    {navItems}
                </div>
                <div className={"saved-items-container"}>
                <FaIcons.FaRegHeart style={{color: 'red'}} className="nav-icons" />
                <div className="saved-items">
                    <h1>Saved Items</h1>
                    <ul>
                        {savedItemsDisplay()}
                    </ul>
                </div>
                </div>
                <Link to="/shoppingcart" className="nav-icons">
                    <span className="basket-count">{props.basket.length}<HiIcons.HiOutlineShoppingBag style={{color: 'red'}} /></span>
                </Link>
            </div>
            <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                <ul className='side-menu-items' onClick={showSidebar}>
                    <li className='sidebar-toggle'>
                    <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link> 
                    </li>
                    {navItems}
                    

                </ul>
            </nav>
        </IconContext.Provider>   
        </>
    )
}

export default Navbar;