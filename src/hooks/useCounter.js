import { useState } from "react";

export const useCounter = (initialState = 10, price) => {
   const [state, setstate] = useState(initialState);

   const increment = (factor = 1)=>{
      setstate(state + factor);
   }
   const decrement = (factor = 1)=>{
      setstate(state - factor);
   }
   const reset = ()=>{
      setstate(initialState);
   }
   const fluidPrice = ()=>{
      return price * state;
   }
   
   return {
      state,
      increment,
      decrement,
      reset,
      fluidPrice
   };

}
