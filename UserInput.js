import React from 'react'
import './UseInput.css'
 const UserInput=React.forwardRef((props,ref)=> {
  return (
    <div className='input'>
<label htmlFor={props.input.id}>{props.label}</label>
<input ref={ref} {...props.input}/>
{/* Here the spread operator ie ... is used to dynamically add the input feilds and map it with respective feild in the object */}
    </div>
  )
});
export default UserInput;