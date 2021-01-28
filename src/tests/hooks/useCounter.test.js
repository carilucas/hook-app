import '@testing-library/jest-dom';
import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';


describe('Pruebas en useCounter', () => {
   test('Debe retornar valores por defecto: increment,decrement,reset', () => {

      const {result} = renderHook(()=>useCounter(10,50))
      
      expect(result.current.state).toBe(10);

      expect(typeof result.current.increment).toBe('function');
      expect(typeof result.current.decrement).toBe('function');
      expect(typeof result.current.reset).toBe('function');
   });
   
   test('Debe tener el counter en 100', () => {

      const {result} = renderHook(()=>useCounter(100,50))
      
      expect(result.current.state).toBe(100);

   });

   test('Debe incrementar el counter', () => {

      const {result} = renderHook(()=>useCounter(100,50))
      
      const {increment} = result.current;
      
      act( ()=>{
         increment()
      } );

      const { state } = result.current;

      expect(state).toBe(101)

   });
   
   test('Debe decrementar el counter', () => {

      const {result} = renderHook( ()=>useCounter(100,50) );
      
      const { decrement } = result.current;
      
      act( ()=>{
         decrement()
      } );

      const { state } = result.current;

      expect(state).toBe(99)

   } );

   test('Debe resetear el counter', () => {
      
      const { result } = renderHook( ()=> useCounter(100,50) );

      const { increment, reset } = result.current;

      act( ()=>{
         increment();
         reset();
      } );

      const { state } = result.current; 
      expect(state).toBe(100);

   })
   



})
