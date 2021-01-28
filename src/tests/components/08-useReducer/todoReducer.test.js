import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
   
   test('Debe Retornar el estado por defecto', () => {
      
      const state = todoReducer(demoTodos,{});
      
      expect(state.length).toBe(2);
      expect(state).toEqual(demoTodos);

   });
   
   test('Debe Agregar un todo', () => {
      
      const newTodo = {
         id : new Date().getTime(),
         desc: 'Description',
         done:false
      }

      const state = todoReducer(demoTodos,{type:'add',payload:newTodo});
      
      console.log(state);
      expect(state.length).toBe(3);
      expect(state).toEqual([...demoTodos,newTodo]);

   });
   
   test('Debe Borrar un todo', () => {
      // Action.payload = id del todo

      const state = todoReducer(demoTodos,{type:'remove',payload:1});
      
      console.log(state);
      expect(state.length).toBe(1);
      expect(state).toEqual([demoTodos[1]]);

   });
   
   test('Debe hacer el toggle del todo', () => {
      
      const state = todoReducer(demoTodos,{type:'completed',payload:1});
      
      console.log(state[0].done);
      expect(state[0].done).toBe(true);

   });
   

})
