import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
   const { state, increment }= useCounter(1,0);
   const { loading, data}  = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
   
   return (
      <div>
         <h1>Breaking Bad Quotes!!!</h1>
         <hr/>
         {
            loading
            ?
               <div className="alert alert-info text-center">
                  Loading...
               </div>
            :
               <blockquote className="blockquote text-end">
                  <p className="mb-3">{data[0].quote}</p>
                  <footer className="blockquote-footer">
                     {data[0].author}
                  </footer>
               </blockquote>
         }
         <button 
            className="btn btn-primary"
            onClick={()=>increment()}   
         >
            Siguiente frase
         </button>
      </div>
   )
}
