import React from 'react';
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Shop from './components/shop/shop'

function App() {
  return (
    <div >
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route  path='/shop/hats' component={Shop}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
