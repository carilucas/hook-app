import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './style.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


const init = ()=>{
   return JSON.parse(localStorage.getItem('Todos')) || []
}

export const TodoApp = () => {

   const [todos,dispatch] = useReducer(todoReducer, [],init);
   
   useEffect(() => {
      localStorage.setItem('Todos' , JSON.stringify(todos));
   }, [todos])

   const handleRemove = (id)=>{
      dispatch({
         type: 'remove',
         payload: id
      })
   }

   const handleCompleted = (id)=>{
      dispatch({
         type:'completed',
         payload: id
      });
   }

   const handleAddTodo = (newTodo)=>{
      dispatch({
         type:'add',
         payload: newTodo
      });  
   }

   return (
      <div>
         <h1>TodoApp: {todos.length}</h1>
         <hr/>
         <div className="row">
            <div className="col-7">
               <TodoList 
                  todos={todos} 
                  handleRemove={handleRemove} 
                  handleCompleted={handleCompleted} 
               />
            </div>
            <div className="col-5">
               <TodoAdd 
                  handleAddTodo={handleAddTodo}
               />
            </div>
         </div>
      </div>
   )
}
