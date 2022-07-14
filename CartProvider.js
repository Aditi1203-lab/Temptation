import React from 'react'
import cart_context from './CartContext'
import { useReducer } from 'react';

 //both useState and useReducer help us to manage state
 const defaultCartState={
    items:[],
    totalAmount:0
};
const cart_reducer=(state,action)=>{
 if(action.status==='add'){//logic for adding item into cart ie grouping same items as one entity with only amount modified instead of adding it as a new item
    const updatedAmount=state.totalAmount+action.item.price*action.item.amount;
const exsisting_item=state.items.findIndex(item=>item.id===action.item.id);
const existingCartItem=state.items[exsisting_item];//used for accessing the index of each element in cartItems array
    
    let updatedItems;
    if(existingCartItem){
        let updatedItem;
      updatedItem={  ...existingCartItem,
        amount:existingCartItem.amount+action.item.amount };
    updatedItems=[...state.items];
    updatedItems[exsisting_item]=updatedItem;
    }
    else{
        
        updatedItems=state.items.concat(action.item);
    }
const update_item=state.items.concat(action.item);//concat gives us a new array instead of updating a new one
 
return {
    items:update_item,
    totalAmount:updatedAmount
};
}
if(action.type==='remove')
 {
   const exsisting_item=state.items.findIndex(item=>item.id===action.id);
   const existingCartItem=state.items[exsisting_item];
   const updatedTotalAmount=state.totalAmount-existingCartItem.price;
   let updatedItems;
   if(existingCartItem.amount===1)
   {
updatedItems=state.items.filter(item=>item.id!==action.item.id);
   }
   else{
const updatedItem={...existingCartItem,amount:existingCartItem.amount-1};
updatedItems=[...state.items];
updatedItems[exsisting_item]=updatedItem;
   }
   return{
    items:updatedItems,
    totalAmount:updatedTotalAmount
   };
 }

    return defaultCartState;
};
export default function CartProvider(props) {
   const [cartState,setCartState]=useReducer(cart_reducer,defaultCartState);
    const add_item_to_cart=(item)=>{
        setCartState({status:'add',item:item});//here item:item
        //is used to forward the item (in the form of object) in the cart
    };//function to add item to cart

    const remove_item_from_cart=(id)=>{
        setCartState({status:'remove',id:id});
    };//function to remove item from cart

    const cartItem={
        items:cartState.items,
       totalAmount:cartState.totalAmount,
addItem:add_item_to_cart,
removeItem:remove_item_from_cart
    };
  return (
    <div>
        <cart_context.Provider value={cartItem}>
            {/* passing that "cartItem object here as a prop" */}
            {props.children}
        </cart_context.Provider>
    </div>
  )
}
