import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Tests de Hook App', () => {
   test('Mostrar el snapshot del Hook app', () => {

      const wrapper = shallow(<HookApp/>);

      expect(wrapper).toMatchSnapshot();

   })
   
})
