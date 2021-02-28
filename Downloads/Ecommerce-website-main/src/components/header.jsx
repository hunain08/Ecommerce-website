import React from 'react';
import {Link } from 'react-router-dom'
import { auth } from './shop/Firebase/firebase';
import './Header.css'
const Header = ({currentUser}) =>(
<div className='header'>
 

<Link to="/">
<img className='logo'src="logo.png" alt='logo' height='40px'/>
</Link>
<div className='options'>
  <Link className='option' to='/shop'>
    SHOP
  </Link>
  <Link className='option' to='/contact'>
    CONTACT
  </Link>
  {currentUser ? (
    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
  )
    :
    (<Link className='option' to='signin'>SIGN IN</Link>)
}
</div>
</div>
)
export default Header;