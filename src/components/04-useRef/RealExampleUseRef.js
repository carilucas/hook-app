import React , { useState } from 'react';
import { MultipleCustomHooks } from '../03-samples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

export const RealExampleUseRef = () => {
   const [show, setShow] = useState(false)
   return (
      <div>
         <h1>RealExampleUseRef</h1>
         <hr/>
         {show && <MultipleCustomHooks/>}
         <button
            className="btn btn-primary mt-5"
            onClick={()=>setShow(!show)}
         >
            Show/hide
         </button>
      </div>
   )
}
