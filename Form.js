import React,{useRef} from 'react'
import './Form.css'
import UserInput from './UserInput'
export default function Form(props) {
const amountInputRef=useRef();
  const submit_form=(event)=>{
event.preventDefault();
const enteredAmount=amountInputRef.current.value;
const enteredAmountNum=+enteredAmount;

if(enteredAmount.trim().length===0 || enteredAmountNum<1||enteredAmountNum>5)
{
  return;
}
props.onAddtoCart(enteredAmountNum);
  };
  return (
    <form className='form' onSubmit={submit_form}>
        {/* <input className='inpu'/>  */}
        {/* here instead of normal input we will make a diff component so that it can be reusable */}
        <UserInput label="Amount" ref={amountInputRef} input={{//Here props are being passed to UserInput as in that file the data is passed 
        //through props only
        //here input has 2 curly bracess because 1st is that the value is dynamic hence {} for evaluating the data 
        //and in this case that data itself seems to be an object so 2nd {} for that.
                    id:'amount',
            type:'number',
           min:'1',
           max:'5',
           step:'1',
           defaultValue:'1'
        }}/>
        <button>+ Add</button>
    </form>
  )
}
