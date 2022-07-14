import React from 'react'
import Button from './Button';
import "./Navbar.css";
export default function Navbar(props) {
  return (
    <div>
        <header>
            <h1 className='heading'>Temptation</h1>
           <Button onclick={props.onShowcart}/>
        </header>
    </div>
  )
}
