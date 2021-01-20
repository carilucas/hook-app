import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';


export const CallbackHook = () => {
   const [counter, setCounter] = useState(10);
   // const increment = ()=>{
   //    setCounter(counter + 1);
   // }

   const increment = useCallback(
      (number) => {
         setCounter(c => c + number);
      },
      [setCounter],
   )

   return (
      <div>
         <h1>use CallbackHook: {counter}</h1>
         <hr/>
         <ShowIncrement increment={increment}/>
      </div>
   )
}

