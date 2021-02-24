import React from 'react';
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

const HatsPage = () =>(
<div>
   <h1>Hats Page</h1>
</div>
);
function App() {
  return (
    <div >
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route  path='/hats' component={HatsPage}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
