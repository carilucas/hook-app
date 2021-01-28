import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <LoginScreen/>', () => {
   const user = {
      id:123,
      name:'carlos',
      email: 'c@c.com'
   }

   const setUser = jest.fn( ()=>(user) );

   const wrapper = mount(
      <UserContext.Provider value={{
         setUser
      }}>
         <LoginScreen/>
      </UserContext.Provider>
   );

   test('Mostrar el snapshot', () => {
      expect(wrapper).toMatchSnapshot();
   });
   
   test('Debe ejecutar setUser con el argumento esperado', () => {
      wrapper.find('button').simulate('click');//Llamar con simulate
      //wrapper.find('button').prop('onClick')();//Llamar con prop a la funcion

      expect(setUser).toHaveBeenCalledTimes(1);
      expect(setUser).toHaveBeenCalledWith(user);
   });
   
})
