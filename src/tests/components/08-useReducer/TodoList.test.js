import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';



describe('Pruebas en <TodoList />', () => {
   const handleRemove = jest.fn();
   const handleCompleted = jest.fn();

   const wrapper = shallow(
      <TodoList 
         todos={demoTodos} 
         handleRemove={ handleRemove } 
         handleCompleted={ handleCompleted }
      />
   );
   
   test('Debe mostrarse correctamente snapshot', () => {
      expect(wrapper).toMatchSnapshot();
   });

   test('Debe mostrar el número correcto de los todos', () => {
      
      expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
      expect(wrapper.find('TodoListItem').at(0).prop('handleRemove')).toEqual(expect.any(Function));
      expect(wrapper.find('TodoListItem').at(0).prop('handleCompleted')).toEqual(expect.any(Function));

   })
   
   
})
