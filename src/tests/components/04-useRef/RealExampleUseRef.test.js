import { shallow } from "enzyme";
import { RealExampleUseRef } from "../../../components/04-useRef/RealExampleUseRef";
import '@testing-library/jest-dom';


describe('Pruebas de RealExampleUseRef', () => {

   const wrapper = shallow(<RealExampleUseRef/>);
   
   test('Debe mostrarse el componente RealExampleUseRef snapshot', () => {

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
      console.log(wrapper.html());
   });

   test('Debe mostrar el componente <MultipleCustomHooks/>', () => {
      
      wrapper.find('button').simulate('click');
      expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
      console.log(wrapper.html());



   })
   
   

})
