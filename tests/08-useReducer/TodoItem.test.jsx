import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas de <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Prueaba todo 1',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el Todo pendiente a completar', () => {

        render(
            <TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
            />
        );

        const liElemento = screen.getByRole('listitem');
        // console.log(liElemento.innerHTML);
        expect(liElemento.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        // console.log(spanElement.className);
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');

        // screen.debug();
    });

    test('debe de mostrar el Todo completado', () => {

        todo.done = true;

        render(
            <TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

    });

    test('span debe de llamar el toggleTodo cuando se hace click', () => {

        render(
            <TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });
    
    test('button debe de llamar el deleteTodo 1', () => {

        render(
            <TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
            />
        );

        // Metodo 1:

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('button debe de llamar el deleteTodo 2', () => {

        render(
            <TodoItem 
            todo={todo} 
            onDeleteTodo={onDeleteTodoMock}
            onToggleTodo={onToggleTodoMock}
            />
        );

        /*
        Metodo 2: 
        (en caso de multiples botones 
        y agregando "aria-label="borrar"" al boton de borrar)
        */
        

        const deleteElement = screen.getByLabelText('borrar');
        fireEvent.click(deleteElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });
  
});
