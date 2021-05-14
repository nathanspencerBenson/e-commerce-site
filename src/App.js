
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import Playstation from './pages/Playstation';
import Xbox from './pages/Xbox';
import Nintendo from './pages/Nintendo';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
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
