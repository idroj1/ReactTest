import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        // console.log(result);

        const { 
            counter, decrement, increment, 
            reset, increment_2, decrement_2
        } = result.current;

        expect(counter).toBe(10);
        expect( decrement ).toEqual(expect.any(Function));
        expect( increment ).toEqual(expect.any(Function));
        expect( reset ).toEqual(expect.any(Function));
        expect( decrement_2 ).toEqual(expect.any(Function));
        expect( increment_2 ).toEqual(expect.any(Function));

    });

    test('debe de generar un counter con el valor de 100', () => {

        const { result } = renderHook( () => useCounter(100) );

        //metodo 1:
        const { counter } = result.current;
        expect( counter ).toBe(100);
        
        //metodo 2:
        expect( result.current.counter ).toBe(100);
    });

    test('debe de incrementar el contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment();
            increment(3);
        });

        expect( result.current.counter ).toBe(105);
    });

    test('debe de decrementar el contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(96);
    });

    test('debe de realizar el reset al contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment, decrement, reset } = result.current;

        act( () => {
            increment();
            decrement();
            increment(4);
            decrement(2);
            reset();
        });

        expect( result.current.counter ).toBe(100);
    });

    test('debe de incrementar o decrementar el contador', () => {

        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment, decrement } = result.current;

        act( () => {
            increment();
            decrement();
            increment(4);
            decrement(2);
        });

        expect( result.current.counter ).toBe(102);
    });
    
});

