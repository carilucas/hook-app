import React, {useState,useEffect} from 'react';
import "./effects.css";
import { Message } from './Message';

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
      name:'',
      lastName:'',
      email:'',
   })

   const { name,lastName,email } = formState;

   useEffect( () => {
      // console.log('hey!');
   },[] );

   useEffect( () => {
      // console.log('formState cambió!');
   },[formState] );
   
   useEffect( () => {
      // console.log('email cambió!');
   },[email] );

   const handleInputChange = ( {target})=>{
      setFormState({
         ...formState,
         [target.name]: target.value
      } );
   }
   return (
      <>
         <h1>UseEffect</h1>
         <hr/>
         <div className="form-group">
            <input 
               type="text"
               name="name"
               className="form-control"
               placeholder="Tu nombre"
               autoComplete="off"
               value={ name }
               onChange={ handleInputChange }
            />
         </div>
         <div className="form-group">
            <input 
               type="text"
               name="lastName"
               className="form-control"
               placeholder="Tu apellido"
               autoComplete="off"
               value={ lastName }
               onChange={ handleInputChange }
            />
         </div>
         <div className="form-group">
            <input 
               type="text"
               name="email"
               className="form-control"
               placeholder="nombre@email.com"
               autoComplete="off"
               value={ email }
               onChange={ handleInputChange }
            />
         </div>

         { (name === '123') && <Message/>} 
      </>
   )
}
