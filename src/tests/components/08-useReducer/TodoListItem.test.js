import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import React from 'react';
import { demoTodos } from '../../fixtures/demoTodos'

const handleCompleted = jest.fn();
const handleRemove = jest.fn();

describe('Pruebas en <TodoListItem/>', () => {

   const wrapper = shallow(
      <TodoListItem 
         todo={demoTodos[0]} 
         index={1} 
         handleCompleted={ handleCompleted } 
         handleRemove={ handleRemove }
      />
   );

   test('Debe mostrar el compomente correctamente', () => {

      expect(wrapper).toMatchSnapshot();
   });
   
   test('Debe llamar la funcion remove', () => {

      // jest.fn()
      // toHaveBeenCalledWith

      wrapper.find('button').simulate('click');
      expect(handleRemove).toHaveBeenCalledWith(demoTodos[0].id)

   });
   
   test('Debe llamar la funcion completed', () => {
      // jest.fn()
      // toHaveBeenCalledWith 
      
      wrapper.find('p').simulate('click');
      expect(handleCompleted).toHaveBeenCalledWith(demoTodos[0].id)
   });
   
   test('Debe mostrar el texto correctamente', () => {
      // Contenido del parrafo
      expect(wrapper.find('p').text()).toBe(`2. ${demoTodos[0].desc}`)
   });
   
   test('Debe mostrar u ocultar la clase complete dependiendo del done', () => {
      // Contenido del parrafo
      
      const todo = demoTodos[0];
      todo.done = true;

      const wrapper = shallow(
         <TodoListItem 
            todo={todo} 
         />
      );

      expect(wrapper.find('p').hasClass('complete')).toBe(true);
   });

   
})
