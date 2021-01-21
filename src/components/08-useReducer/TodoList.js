import React from 'react'
import {TodoListItem} from './TodoListItem'

export const TodoList = ({todos, handleRemove, handleCompleted}) => {
   return (
      <ul className="list-group list-group-flush">
         {
            todos.map((todo,i) => (
               <TodoListItem 
               key={todo.id}
               todo={todo} 
               index={i} 
               handleRemove={handleRemove} 
               handleCompleted={handleCompleted}
               />
               
            ))
         }
      </ul>
   )
}
