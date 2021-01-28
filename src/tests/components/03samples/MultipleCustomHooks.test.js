import { shallow } from "enzyme"
import { MultipleCustomHooks } from "../../../components/03-samples/MultipleCustomHooks"
import '@testing-library/jest-dom';
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe('Pruebas con <MultipleCustomHooks/>', () => {

   beforeEach( ()=>{
      useCounter.mockReturnValue({
         state: 10,
         increment: ()=>{}
      })
   } );
   
   test('Debe mostrarse correctamente', () => {
      

      useFetch.mockReturnValue({
         data:null,
         loading:true,
         error:null
      });

      const wrapper = shallow(<MultipleCustomHooks/>);
      
      expect(wrapper).toMatchSnapshot();

   });
   
   test('Debe mostrarse la información', () => {
      
      useFetch.mockReturnValue({
         data:[{
            author:'Carlos',
            quote:'Hola'
         }],
         loading:false,
         error:null
      });
      const wrapper = shallow(<MultipleCustomHooks/>);
      
      expect(wrapper.find('.alert').exists()).toBe(false);
      expect(wrapper.find('.mb-3').text().trim()).toBe('Hola');
      expect(wrapper.find('footer').text().trim()).toBe('Carlos');
      

   });
   
})
