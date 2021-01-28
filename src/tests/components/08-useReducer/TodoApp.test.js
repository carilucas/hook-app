import { mount, shallow } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import '@testing-library/jest-dom';
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe('Pruebas de <TodoApp/>', () => {
   
   const wrapper = shallow(<TodoApp/>);
   Storage.prototype.setItem = jest.fn();

   test('Debe mostrarse correctamente snapsot', () => {

      expect(wrapper).toMatchSnapshot();
   });
   
   test('Debe agregar un todo', () => {

      const wrapper = mount(<TodoApp />);

      act( ()=>{
         wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
         wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
      } )

      expect(wrapper.find('h1').text().trim()).toBe('TodoApp: 2');
      expect(localStorage.setItem).toHaveBeenCalledTimes(2);

   });

   test('Debe borrar un todo', () => {
      
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      expect(wrapper.find('h1').text().trim()).toBe('TodoApp: 1');
      
      wrapper.find('TodoList').prop('handleRemove')(demoTodos[0].id);
      expect(wrapper.find('h1').text().trim()).toBe('TodoApp: 0');
   })
   



})
