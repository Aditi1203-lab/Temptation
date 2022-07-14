import React,{useContext} from 'react'
import Form from './Form'
import './MealItem.css'
import cart_context from './CartContext'
export default function MealItem(props) {//Accessing elements via props
  const cartItem=useContext(cart_context);
  const addtocarthand=(amount)=>{
cartItem.addItem({
  id:props.id,
  name:props.name,
  amount:amount,
  price:props.price
})
  }
  return (
   <li className='meal'>
    {/* //Here as the individual item will be rendered into the ul hence here we return li component */}
    <div className='div_wra'>
        <h3>{props.name}</h3>
        <div className='description'>{props.description}</div>
        <div className='price'>Rs.{props.price}/-</div>
        </div>
    <div className='form_component'>
<Form onAddtoCart={addtocarthand}/>
    </div>
    </li>
  )
}
