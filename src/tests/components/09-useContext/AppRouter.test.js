import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <AppRouter/>', () => {
   const user = {
      name:'carlos',
      email:'c@ca.com'
   }
   const wrapper = mount(
      <UserContext.Provider value={{user}}>
         <AppRouter/>
      </UserContext.Provider>
   );

   test('Mostrar el snapshot', () => {
     expect(wrapper).toMatchSnapshot(); 
   })
   
})
