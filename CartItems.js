import React from 'react'
import './CartItems.css'

const CartItem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div className='div_item'>
        <h2>{props.name}</h2>
        <div className='summary'>
          <span className='price'>{price}</span>
          <span className='amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button className='remove_btn' onClick={props.onRemove}>-</button>
        <button className='add_btn' onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
