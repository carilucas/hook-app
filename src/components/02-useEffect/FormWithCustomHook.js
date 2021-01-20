import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import "./effects.css";


export const FormWithCustomHook = () => {

   const [formValues, handleInputChange] = useForm({
      name:'',
      email:'',
      password:'',
   })

   const { name,password,email } = formValues;

   useEffect(() => {
      console.log('Email cambió');
   }, [email])
   
   const handleSubmit = e=>{
      e.preventDefault()
      console.log(formValues);
   }

   return (
      <form onSubmit={ handleSubmit }>
         <h1>Form with custom hook</h1>
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
               name="email"
               className="form-control"
               placeholder="nombre@email.com"
               autoComplete="off"
               value={ email }
               onChange={ handleInputChange }
            />
         </div>
         <div className="form-group">
            <input 
               type="password"
               name="password"
               className="form-control"
               placeholder="Tu password"
               autoComplete="off"
               value={ password }
               onChange={ handleInputChange }
            />
         </div>
         <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
   )
}
