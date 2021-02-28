import React from 'react';
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Shop from './components/shop/shop'
import SigninSignup from './components/signandsignuppage/Sign-Signup'
import { auth } from '././components/shop/Firebase/firebase'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:null
    };
  }
  unsubscribefromAuth = null;
  componentDidMount(){
    this.unsubscribefromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    })
  }
  componentWillUnmount(){
    this.unsubscribefromAuth();
  }
  render(){
  return (
    <div >
    
    <BrowserRouter>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route  path='/shop/hats' component={Shop}/>
    <Route path='/signin' component={SigninSignup}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}
}
export default App;
