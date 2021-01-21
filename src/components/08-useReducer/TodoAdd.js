import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';   

export const TodoAdd = ({ handleAddTodo }) => {

   const [error, setError] = useState(false);

   const [{description}, handleInputChange, reset] =  useForm({description:''});

   const handleSubmit = e=>{
      e.preventDefault();

      if (description.trim().length <= 3) {
         setError(true);
         return;
      }else{
         setError(false)
      }

      const newTodo = {
         id : new Date().getTime(),
         desc: description,
         done:false
      }

      handleAddTodo(newTodo);
      reset();
   }
   return (
      <>
         <h4>Agregar tarea</h4>
         <hr/>
         <form action="" onSubmit={handleSubmit}>
            <input 
               type="text"
               name="description"
               placeholder="Aprender"
               autoComplete="off"
               className="form-control"
               onChange={handleInputChange}
               value={description}
            />
            {
               error && <div className="alert alert-danger" role="alert">
               Ingresa una descripción para tu taréa de al menos 4 caractéres
               </div>}
            <button
               type="submit"
               className="btn btn-outline-primary mt-1 w-100"
            >
               Agregar
            </button>
         </form>
      </>
   )
}
