import '@testing-library/jest-dom';
import { renderHook , act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas de useForm', () => {

   const initialForm = {
      name:'fernando',
      email: 'fer@f.com'
   }

   test('Debe inicializarse con un objeto vacio', () => {
      
      const { result } = renderHook( ()=>useForm({}) );
      
      const [values] = result.current;

      expect(values).toEqual({})

   });
   
   test('Debe regresar un formulario por defecto', () => {
      
      const { result } = renderHook( ()=>useForm(initialForm) );
      
      const [values] = result.current;

      expect(values).toEqual(initialForm)

   });
   
   test('Debe cambiar el valor del formulario (cambiar name)', () => {
      
      const event = {
         target:{
            name: 'name',
            value: 'fernando'
         }
      }

      const { result } = renderHook( ()=>useForm({}) );
      
      const [ ,handleInputChange] = result.current;

      act( ()=>{
         handleInputChange(event);
      } );

      const [values] = result.current;
      expect(values.name).toBe('fernando');

   });
   
   test('Debe re-establecer el form con reset', () => {
      
      const event = {
         target:{
            name: 'name',
            value: 'fernando'
         }
      }

      const { result } = renderHook( ()=>useForm({}) );
      
      const [ ,handleInputChange, reset] = result.current;

      act( ()=>{
         handleInputChange(event);
         reset();
      } );

      const [values] = result.current;
      expect(values).toEqual({});

   });


   
})
