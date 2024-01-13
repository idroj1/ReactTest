
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const {user, setUser } = useContext(UserContext);

  return (
    <>
        <h1>LoginPage</h1>
        <hr/>

        <pre>
          {JSON.stringify( user , null, 3 )}
        </pre>
        
        <button 
        className="btn btn-primary"
        onClick={ () => setUser({ 
          id: 123, 
          name: 'Juan Lopez', 
          email: 'juanlopez@gmail.com' 
        }) }
        >
          Establecer user
        </button>
    </>
  )
}

//----------------------------

// export const LoginPage = () => {
//   return (
//     <>
//         <h1>LoginPage</h1>
//         <hr/>
//     </>
//   )
// }

//----------------------------

// import { useContext } from "react";
// import { UserContext } from "./context/UserContext";

// export const LoginPage = () => {

//   const { user } = useContext(UserContext);

//   return (
//     <>
//         <h1>LoginPage</h1>
//         <hr/>

//         <pre>
//           {JSON.stringify( user , null, 3 )}
//         </pre>
//     </>
//   )
// }