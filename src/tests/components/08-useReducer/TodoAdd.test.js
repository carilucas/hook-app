import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
import '@testing-library/jest-dom';

describe('Pruebas de <TodoAdd />', () => {

   const handleAddTodo = jest.fn()
   const wrapper = shallow(
      <TodoAdd 
         handleAddTodo={handleAddTodo}
      />
   )

   test('Mostrar el snapshot', () => {
      
      expect(wrapper).toMatchSnapshot();

   });
   
   test('NO debe llamar handleAddTodo', () => {
      
      const formSubmit = wrapper.find('form').prop('onSubmit');

      formSubmit({preventDefault(){}});

      expect(handleAddTodo).toHaveBeenCalledTimes(0)

   });
   
   test('Debe llamar handleAddTodo', () => {
      
      const newTodo = {
         id : new Date().getTime(),
         desc: 'description ejempo',
         done:false
      }

      wrapper.find('input').simulate('change',{
         target:{
            name: 'description',
            value: newTodo.desc
         }
      });

      const formSubmit = wrapper.find('form').prop('onSubmit');
      formSubmit({preventDefault(){}});
      
      expect(handleAddTodo).toHaveBeenCalledTimes(1);
      expect(handleAddTodo).toHaveBeenCalledWith({...newTodo, id: expect.any(Number)});
      expect(wrapper.find('input').prop('value')).toBe('');

   });
   
   
})
