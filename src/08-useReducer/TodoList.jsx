
import { TodoItem } from "./TodoItem";

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul 
       className="list-group"
      >
        {todos.map((todo) => (
          <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDeleteTodo={onDeleteTodo} 
          onToggleTodo={onToggleTodo}
          />
        ))
        }
      </ul>
    </>
  );
};

//------------------------

// export const TodoList = ({todos = []}) => {
//   return (
//     <>
//       <ul 
//        className="list-group"
//       >
//         {
//           todos.map( todo => (
//             <li key={todo.id} className="list-group-item d-flex justify-content-between">
//               <span className="align-self-center">
//                 Item 1
//               </span>
//               <button className="btn btn-danger">
//                 Borrar
//               </button>
//             </li>
//           ))
//         }
//       </ul>
//     </>
//   );
// };

//------------------------

// import { TodoItem } from "./TodoItem";
// 
// export const TodoList = ({todos = [], onDeleteTodo}) => {
//   return (
//     <>
//       <ul className="list-group">
//         {
//           todos.map( todo => (
//             <TodoItem key={todo.id} todo={todo}
//             onDeleteTodo={onDeleteTodo} />
//           ))
//         }
//       </ul>
//     </>
//   );
// };