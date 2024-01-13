
export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        
        case 'Adding ToDo':
            return [ ...initialState, action.payload ];
        
        case 'Remove ToDo':
            return initialState.filter( todo => todo.id !== action.payload );

        case 'Toggle ToDo':
            return initialState.map( todo => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
    
        default:
            return initialState;
    }
}

//-----------------------------

// export const todoReducer = ( initialState = [], action ) => {

//     switch (action.type) {
        
//         case 'abc':
//             throw new Error('Action.type = abc no esta implementada');

//         default:
//             return initialState;
//     }
// }

//-----------------------------

// export const todoReducer = ( initialState = [], action ) => {

//     switch (action.type) {
        
//         case 'Adding ToDo':
//             return [ ...initialState, action.payload ];

//         case 'Remove ToDo':
//             return initialState.filter( todo => todo.id !== action.payload );

//         default:
//             return initialState;
//     }
// }