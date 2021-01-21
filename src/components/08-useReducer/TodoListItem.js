import React from 'react'

export const TodoListItem = ({todo, index, handleCompleted, handleRemove}) => {
   return (
      <li
         key={todo.id}
         className="list-group-item"
      >
         <p
            className={`${todo.done && "complete"}`}
            onClick={()=> handleCompleted(todo.id)}
         >
            {index + 1}. {todo.desc}
         </p>
         <button
            onClick={()=>handleRemove(todo.id)}
            className="btn btn-danger"
         >
            Borrar
         </button>
      </li>
   )
}
