import React from 'react'
import './ModalWrapper.css'
import ReactDOM from 'react-dom';
const Backdrop=(props)=>{
    return <div className='backdrop' onClick={props.onClose}></div>
};//function for backdrop
const ModalOverlay=(props)=>{
return <div className='modal'>
    <div className='content'>{props.children}</div>
</div>
};//function for displaying overlays

const portal=document.getElementById('overlays');
export default function ModalWrapper(props) {
  return (//ReactDOM.createPortal requires 2 arguments ie what to portal and where to portal
    <>
   {ReactDOM.createPortal(<Backdrop onClose={props.onclose}/>,portal)}
   {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portal)}
    </>
     //here we need to use react portals and for using this in "index.html" after the root element
    //we need to add "<div id="overlays"></div>" this line as this will be the div/place were we want to render our modal 
    //component
  )
}
