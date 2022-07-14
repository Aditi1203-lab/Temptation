import React from 'react'

// export default function CartContext() {
//   return (
//     <div>CartContext</div>
//   )
// }
const cart_context=React.createContext({
  items:[],
  totalAmount:0,
  addItem:(item)=>{},
  removeItem:(id)=>{}
});

export default cart_context;