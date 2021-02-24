import React from 'react';
import {withRouter} from 'react-router-dom';
import './Home.css';
const MenuItems = ({title,imageUrl,size,history,linkUrl,match}) => (
    <div
    style={{backgroundImage:`url(${imageUrl})`}}
     className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
);
export default withRouter(MenuItems);