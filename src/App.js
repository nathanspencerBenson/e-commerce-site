
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { React, useState } from 'react';
import './App.scss';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Playstation from './pages/Playstation';
import Xbox from './pages/Xbox';
import Nintendo from './pages/Nintendo';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  const [ savedItems, setSavedItems ] = useState([]);


  const addSavedItem = (item) => {
    const  result = savedItems.some(function(el ) {
      return el.id === item.id
    });
    if (result) {
      setSavedItems(savedItems.filter(el => el.id !== item.id))
    }
    else setSavedItems([...savedItems, item]);
  };



  return (
    <div className="App">
      <Router>
        <Navbar savedItems={savedItems} setSavedItems={setSavedItems} />
        <Switch>
          <Route path='/' exact>
            <Home addSavedItem={addSavedItem} savedItems={savedItems} setSavedItems={setSavedItems}/>
          </Route>
          <Route path='/playstation' component={Playstation}/>
          <Route path='/xbox' component={Xbox}/>
          <Route path='/nintendo' component={Nintendo}/>
          <Route path='/shoppingcart' component={ShoppingCart} />
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
