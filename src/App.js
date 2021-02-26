import React from 'react';
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Shop from './components/shop/shop'
import SigninSignup from './components/signandsignuppage/Sign-Signup'
function App() {
  return (
    <div >
    
    <BrowserRouter>
    <Header/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route  path='/shop/hats' component={Shop}/>
    <Route path='/signin' component={SigninSignup}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
