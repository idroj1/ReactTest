
const initialState = [{
    is: 1,
    todo: 'iniciar initialValue.',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {

    if (action.type === '[TODO] add todo'){
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'agregando un nuevo value.',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction);

console.log(todos);

//-------------------------

// const initialState = [{
//     is: 1,
//     todo: 'iniciar initialValue.',
//     done: false,
// }];

// const todoReducer = ( state = initialState, action = {} ) => {

//     if (action.type === '[TODO] add todo'){
//         return [ ...state, action.payload ];
//     }

//     return state;
// }

// let todos = todoReducer();

// console.log(todos);