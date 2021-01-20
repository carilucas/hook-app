
const initialState = [
   {
      id: 1,
      todo:'Comprar pan',
      done : false
   }
]

const todoReducer = (state=initialState,action)=>{
   if (action && action.type==='AGREGAR') {
      return [...state,action.payload]
   }
   return state
}

let todos = todoReducer();

const todo2 = {
   id: 2,
   todo:'Comprar huevos',
   done : false
}

const agregarTodo = {
   type:'AGREGAR',
   payload: todo2
}

todos = todoReducer(todos,agregarTodo);


console.log(todos);