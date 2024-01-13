import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/hooks_index";

export const TodoApp = () => {

    const {
        todosCount, todosPendingCount, todos, handleDeleteTodo,
        handleToggleTodo, handleNewTodo,
    } = useTodos();

    return (
       <>

          <h1>
            TodoApp: {todosCount} / <small>Pendientes: {todosPendingCount}</small>
          </h1>
          <hr/>

          <div className="row">
            <div className="col-7">

                {/* TodoList */}

                <TodoList
                 todos={todos}
                 onDeleteTodo={handleDeleteTodo}
                 onToggleTodo={handleToggleTodo}
                />

                {/* Fin TodoList */}

            </div>

            <div className="col-5">

                <h1>TodoApp</h1>
                <hr/>

                {/* TodoAdd onNewTodo(todo)*/}
                {/* {id: new Date()..., description: '', done: false } */}

                <TodoAdd
                 onNewTodo={handleNewTodo}
                />

                {/* Fin TodoAdd */}

            </div>

          </div>

       </>
    )
}

//-------------------------------------------------

// import { useReducer } from "react";
// import { todoReducer } from "./todoReducer";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     description: 'entrar descripcion de estado',
//     done: 'false',
//   },
//   {
//     id: new Date().getTime() + 10,
//     description: 'entrar desc mas de estado',
//     done: 'false',
//   },
//   {
//     id: new Date().getTime() * 4,
//     description: 'entrar desc por de estado',
//     done: 'false',
//   },
// ]

// export const TodoApp = () => {

//   const [ state, dispatch ] = useReducer(todoReducer, initialState)

//   return (
//    <>

//       <h1>TodoApp</h1>
//       <hr/>

//       <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ul>

//     </>
//   )
// }

//----------------------------------------

// import { useReducer } from "react";
// import { todoReducer } from "./todoReducer";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     description: "entrar descripcion de estado",
//     done: "false",
//   },
//   {
//     id: new Date().getTime() + 10,
//     description: "entrar desc mas de estado",
//     done: "false",
//   },
//   {
//     id: new Date().getTime() * 4,
//     description: "entrar desc por de estado",
//     done: "false",
//   },
// ];

// export const TodoApp = () => {
//   const [state, dispatch] = useReducer(todoReducer, initialState);

//   return (
//     <>
//       <h1>TodoApp</h1>
//       <hr />

//       <div className="row">
//         <div className="col-7">
//           <ul className="list-group">
//             <li className="list-group-item">Item 1</li>
//             <li className="list-group-item">Item 2</li>
//             <li className="list-group-item">Item 3</li>
//           </ul>
//         </div>

//         <div className="col-5">
//           <h4>Agregar TODO</h4>
//           <hr />

//           <form>
//             <input
//               type="text"
//               placeholder="Que hay que hacer?"
//               className="form-control"
//             />

//             <button 
//             type="submit" 
//             className="btn btn-outline-primary mt-3"
//             >
//               Agregar
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

//-----------------------------------------

// import { useReducer } from "react";
// import { todoReducer } from "./todoReducer";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     description: "entrar descripcion de estado",
//     done: "false",
//   },
//   {
//     id: new Date().getTime() + 10,
//     description: "entrar desc mas de estado",
//     done: "false",
//   },
//   {
//     id: new Date().getTime() * 4,
//     description: "entrar desc por de estado",
//     done: "false",
//   },
// ];

// export const TodoApp = () => {
//   const [state, dispatch] = useReducer(todoReducer, initialState);

//   return (
//     <>
//       <h1>TodoApp: 10, <small>pendientes: 5</small> </h1>
//       <hr />

//       <div className="row">
//         <div className="col-7">
//           <ul className="list-group">
//             <li className="list-group-item d-flex justify-content-between">
//               <span className="align-self-center">
//                 Item 1
//               </span>
//               <buttom className="btn btn-danger">
//                 Borrar
//               </buttom>
//             </li>
//           </ul>
//         </div>

//         <div className="col-5">
//           <h4>Agregar TODO</h4>
//           <hr />

//           <form>
//             <input
//               type="text"
//               placeholder="Que hay que hacer?"
//               className="form-control"
//             />

//             <button 
//             type="submit" 
//             className="btn btn-outline-primary mt-3"
//             >
//               Agregar
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

//------------------------------------------------------

// import { useReducer } from "react";
// import { todoReducer } from "./todoReducer";
// import { TodoList } from "./TodoList";
// import { TodoAdd } from "./TodoAdd";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     description: "entrar descripcion de estado",
//     done: "false",
//   },
//   {
//     id: new Date().getTime() + 10,
//     description: "entrar desc mas de estado",
//     done: "false",
//   },
//   {
//     id: new Date().getTime() * 4,
//     description: "entrar desc por de estado",
//     done: "false",
//   },
// ];

// export const TodoApp = () => {

//   const [todos, dispatch] = useReducer(todoReducer, initialState);

//   const handleNewTodo = ( todo ) => {
//     console.log({ todo });
//   }

//   return (
//     <>
//       <h1>TodoApp: 10, <small>pendientes: 5</small> </h1>
//       <hr />

//       <div className="row">
//         <div className="col-7">
//           <TodoList todos={todos}/>
//         </div>

//         <div className="col-5">
//           <h4>Agregar TODO</h4>
//           <hr />

//           <TodoAdd onNewTodo={handleNewTodo}/>
//         </div>
//       </div>
//     </>
//   );
// };

//---------------------------------------------

// import { useReducer } from "react";
// import { todoReducer } from "./todoReducer";
// import { TodoList } from "./TodoList";
// import { TodoAdd } from "./TodoAdd";

// const initialState = [
//   {
//     id: new Date().getTime(),
//     description: "entrar descripcion de estado",
//     done: "false",
//   },
//   {
//     id: new Date().getTime() + 10,
//     description: "entrar desc mas de estado",
//     done: "false",
//   },
//   {
//     id: new Date().getTime() * 4,
//     description: "entrar desc por de estado",
//     done: "false",
//   },
// ];

// export const TodoApp = () => {

//   const [todos, dispatch] = useReducer(todoReducer, initialState);

//   const handleNewTodo = ( todo ) => {
//     const action = {
//       type: 'Adding ToDo',
//       payload: todo,
//     }
//     dispatch(action);
//   }

//   return (
//     <>
//       <h1>TodoApp: 10, <small>pendientes: 5</small> </h1>
//       <hr />

//       <div className="row">
//         <div className="col-7">
//           <TodoList todos={todos}/>
//         </div>

//         <div className="col-5">
//           <h4>Agregar TODO</h4>
//           <hr />

//           <TodoAdd onNewTodo={handleNewTodo}/>
//         </div>
//       </div>
//     </>
//   );
// };

//-----------------

// import { useEffect, useReducer } from "react";
// import { todoReducer } from "./todoReducer";
// import { TodoList } from "./TodoList";
// import { TodoAdd } from "./TodoAdd";

// const initialState = [

// ];

// const init = () => {
//   return JSON.parse(localStorage.getItem('todos')) || [];
// }

// export const TodoApp = () => {

//   const [todos, dispatch] = useReducer(todoReducer, initialState, init);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const handleNewTodo = ( todo ) => {
//     const action = {
//       type: 'Adding ToDo',
//       payload: todo,
//     }
//     dispatch(action);
//   }

//   const handleDeleteTodo = ( id ) => {
//     dispatch({
//       type: 'Remove ToDo',
//       payload: id,
//     });
//   }

//   const handleToggleTodo = ( id ) => {
//     dispatch({
//       type: 'Toggle ToDo',
//       payload: id,
//     });
//   }

//   return (
//     <>
//       <h1>TodoApp: 10, <small>pendientes: 5</small> </h1>
//       <hr />

//       <div className="row">
//         <div className="col-7">
//           <TodoList 
//           todos={todos} 
//           onDeleteTodo={handleDeleteTodo}
//           onToggleTodo={handleToggleTodo}
//           />
//         </div>

//         <div className="col-5">
//           <h4>Agregar TODO</h4>
//           <hr />

//           <TodoAdd onNewTodo={handleNewTodo}/>
//         </div>
//       </div>
//     </>
//   );
// };

//------------------------------------

// import { TodoList } from "./TodoList";
// import { TodoAdd } from "./TodoAdd";
// import { useTodos } from "../hooks/hooks_index";

// export const TodoApp = () => {

//     const {
//         todosCount, todosPendingCount,
//         todos, handleDeleteTodo,
//         handleToggleTodo, handleNewTodo,
//     } = useTodos();

//     return (
//        <>
//           <h1>TodoApp: 10, <small>pendientes: 5</small> </h1>
//           <hr/>

//           <div className="row">

//             <div className="col-7">
//               <TodoList
//                  todos={todos}
//                  onDeleteTodo={handleDeleteTodo}
//                  onToggleTodo={handleToggleTodo}
//               />
//             </div>

//             <div className="col-5">

//                 <h4>Agregar TODO</h4>
//                 <hr/>

//                 <TodoAdd
//                  onNewTodo={handleNewTodo}
//                 />

//             </div>

//           </div>

//        </>
//     )
// }