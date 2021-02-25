import React from 'react';
import SHOP_DATA from './shopdata';
import './shop.css'
class Shop extends React.Component{
constructor(props){
    super(props);
    this.state = {
        collections: SHOP_DATA
    };
}
  render()
  {
     return(
         <div className='collection-item'>{this.state.collections.map((collect)=>{
             return(<div className='title'>{collect.title.toUpperCase()}{collect.items.map((item)=>{return(<div><div className='collection-item'><img className='Image' src={item.imageUrl}/></div><div className='collection-footer'><div className='name'>{item.name}</div> <div className='price'><span>Price:$</span>{item.price}</div></div></div>)})}</div>
         )})}</div>
     )
  }
}
export default Shop;