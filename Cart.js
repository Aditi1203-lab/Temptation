import React,{useContext} from 'react'
import './Cart.css'
import ModalWrapper from './ModalWrapper';
import cart_context from './CartContext'
import CartItems from './CartItems'
export default function Cart(props) {
  const cart_items=useContext(cart_context);
  const addItemHandeler=(item)=>{
  cart_items.addItem({...item,amount:1});
  };
  const removeItemHandeler=(id)=>{
    cart_items.removeItem(id);
  };
  const totalAmount=`Rs${cart_items.totalAmount.toFixed(2)}`;
//  const hasItems=cart_items.length>0;
  const cartItems=<ul className='cart-items'>{cart_items.items.map(items=><CartItems className='bts' key={items.id} name={items.name} price={items.price} amount={items.amount}onRemove={removeItemHandeler.bind(null,items.id)} onAdd={addItemHandeler.bind(null,items)}/>)}</ul>;//This is a object (hence within a curly brace) whih contains items thst we finally add to the cart
  const get_alert=()=>{
alert('Your order has been placed!!');
  };
 
  return (
   <ModalWrapper onClose={props.onclose}>
      {cartItems}
      <div className='total'>
        <span className='total_am'>Total Amount</span>
        <span className='pri'>{totalAmount}</span>
      </div>
<div className='actions'>
<button className='button--alt' onClick={props.onclose}>Close</button>
 <button className='button' onClick={get_alert}>Order</button>
</div>
    </ModalWrapper>
  )
}
