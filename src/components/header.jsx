import React from 'react';
import {Link } from 'react-router-dom'
import './Header.css'
const Header = () =>(
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
</div>
</div>
)
export default Header;