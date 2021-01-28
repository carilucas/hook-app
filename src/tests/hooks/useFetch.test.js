import '@testing-library/jest-dom';
import {renderHook, act} from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';



describe('Pruebas en useFetch', () => {

   test('Debe traer info por defecto', () => {

      const {result} = renderHook( ()=> useFetch('https://www.breakingbadapi.com/api/quotes/1') )
      expect(typeof result.current).toBe('object');
      expect(result.current.data).toBe(null);
      expect(result.current.loading).toBe(true);
      expect(result.current.error).toBe(null);

   })
   
   test('Debe tener la info deseada', async() => {

      const { result , waitForNextUpdate } = renderHook( ()=> useFetch('https://www.breakingbadapi.com/api/quotes/1') );
      await waitForNextUpdate();

      const { data,loading,error } = result.current;

      expect(typeof data).toBe('object');
      expect(data.length ).toBe(1);
      expect( loading ).toBe(false);

   })
   
   test('Debe manejar el error', async() => {

      const { result , waitForNextUpdate } = renderHook( ()=> useFetch('https://reqres.in/apiYdsws/users?page=2') );
      await waitForNextUpdate();

      const { error } = result.current;
      console.log(error);
      expect( error ).toBe('No se cargó la data');

   })

   
})
