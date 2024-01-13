import { useEffect, useReducer } from 'react';
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = []

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = () => {
    
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {

        localStorage.setItem( 'todos', JSON.stringify( todos ) );

    }, [todos]);

    const handleNewTodo = (todo) => {
        
        const action = {
            type: 'Adding ToDo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: 'Remove ToDo',
            payload: id
        });
    }
    
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: 'Toggle ToDo',
            payload: id
        });
    }

    return {
        todosCount: todos.length, 
        todosPendingCount: todos.filter(todo => !todo.done).length,
        todos,
        handleDeleteTodo, 
        handleToggleTodo, 
        handleNewTodo,
    }
}

//----------------------------------------

// import { useEffect, useReducer } from 'react';
// import { todoReducer } from "../08-useReducer/todoReducer";

// // const initialState = [
// //     // {
// //     //     id: new Date().getTime(),
// //     //     description: 'probar el TodoApp',
// //     //     done: false,
// //     // },
// //     // {
// //     //     id: new Date().getTime() + 100,
// //     //     description: 'probar el TodoApp parte 2',
// //     //     done: false,
// //     // }
// // ]

// const initialState = []

// const init = () => {
//     return JSON.parse( localStorage.getItem('todos') ) || [];
// }

// export const useTodos = () => {
    
//     const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

//     useEffect(() => {
//         // console.log(todos);
//         localStorage.setItem( 'todos', JSON.stringify( todos ) );

//     }, [todos]);

//     const handleNewTodo = (todo) => {
        
//         // console.log({todo});

//         const action = {
//             type: 'Adding ToDo',
//             payload: todo
//         }
//         dispatch(action);
//     }

//     const handleDeleteTodo = ( id ) => {
//         dispatch({
//             type: 'Remove ToDo',
//             payload: id
//         });
//     }
    
//     const handleToggleTodo = ( id ) => {
//         dispatch({
//             type: 'Toggle ToDo',
//             payload: id
//         });
//     }

//     return {
//         todosCount: todos.length, 
//         todosPendingCount: todos.filter(todo => !todo.done).length,
//         todos,
//         handleDeleteTodo, 
//         handleToggleTodo, 
//         handleNewTodo,
//     }
// }