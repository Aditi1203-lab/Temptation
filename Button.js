import React,{useContext} from 'react'
import "./Navbar.css";
import cart_context from './CartContext';
export default function Button(props) {
  const cart_btn=useContext(cart_context);
  return (
    <button className='btn' onClick={props.onclick}>
        <span><img className='shop'src='https://www.pngfind.com/pngs/m/146-1464860_png-file-black-shopping-cart-icon-transparent-png.png' alt=''/></span>
        <span className='yc'>Your Cart</span>
        <span className='number'>{cart_btn.items.reduce((num,item)=>{return num+item.amount},0)}</span>
{/* Here we use reduce() method to get the number of elements in cart , as suhi will be co nsidered as a single item but 
its number will the part of cart.it takes 2 arguments ie function and starting value */}
    </button>
  )
}
