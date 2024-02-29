import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/03-example_index";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas de <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render( <MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));

        expect(screen.getByText('BreakingBad Quotes'));

        // const reactButton = screen.getByRole('button');
        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        // console.log(nextButton.disabled);
        expect(nextButton.disabled).toBeTruthy();

        // screen.debug();

    });

    test('Debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks />);
        // screen.debug();

        expect( screen.getByText('Fernando') ).toBeTruthy();
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();

    });
    
    test('Debe de llamar la funcion de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
    
});