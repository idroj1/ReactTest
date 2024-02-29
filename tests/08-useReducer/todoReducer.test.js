import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas del todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];

    test('debe de regresar el estado inicial ', () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
      
    });

    test('debe de agregar un todo', () => {

        const action = {
            type: 'Adding ToDo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false,
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
      
    });

    test('debe de eliminar un todo', () => {

        const action = {
            type: 'Remove ToDo',
            payload: 1,
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
      
    });

    test('debe de realizar el Toggle del todo', () => {

        const action = {
            type: 'Toggle ToDo',
            payload: 1,
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const newState_2 = todoReducer(newState, action);
        expect(newState_2[0].done).toBe(false);
      
    });
});
