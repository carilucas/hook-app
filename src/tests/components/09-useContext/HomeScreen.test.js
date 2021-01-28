import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas de >HomeScreen/>', () => {
   const user = {
      name:'fernando',
      email:'f@f.com'
   }
   const wrapper = mount(
      <UserContext.Provider value={{
         user
      }}>
       <HomeScreen />
      </UserContext.Provider>
   );
   
   test('Mostrar el componente correctamente snapshot', () => {
      
      expect(wrapper).toMatchSnapshot();

   })
   

})
