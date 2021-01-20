import React , { useState } from 'react';
import { useCounter } from "../../hooks/useCounter";
import { Small } from './Small';
import '../02-useEffect/effects.css';

export const Memorize = () => {

   const [show, setShow] = useState(false)
   const {state,increment} = useCounter(10)
   return (
      <div>
         <h1>Counte: <Small value={state} /> </h1>
         <hr/>
         <button 
            className="btn btn-primary"
            onClick={()=>increment()}
         >aumentar
         </button>
         <button 
            className="btn btn-outline-primary ml-3"
            onClick={()=>{
               setShow(!show)
            }}
         >
            Show / hide {JSON.stringify(show)}
         </button>
      </div>
   )
}
