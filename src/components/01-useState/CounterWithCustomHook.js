import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
   const {state,increment,decrement,reset,fluidPrice} = useCounter(0, 5);
   return (
      <>
         <h1>Counter with hook: {state}</h1>
         <button 
            className="btn btn-success"
            onClick = {()=>increment()}
         >
            +1
         </button>
         <button 
            className="btn btn-success"
            onClick = {reset}
         >
            RESET
         </button>
         <button 
            className="btn btn-danger"
            onClick = {()=>decrement()}
         >
            -1
         </button>
         <p>{fluidPrice()}</p>
      </>
   )
}
