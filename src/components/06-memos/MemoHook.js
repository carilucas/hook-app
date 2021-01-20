import React , { useState, useMemo } from 'react';
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../helpers/ProcesoPesado";
import '../02-useEffect/effects.css';

export const MemoHook = () => {

   const [show, setShow] = useState(false);

   const {state,increment} = useCounter(5000);

   const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

   return (
      <div>
         <h1>MemoHook</h1>
         <h3>Counte: <small>{state}</small> </h3>
         <hr/>
         <p>{memoProcesoPesado}</p>
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
