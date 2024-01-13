import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

  const {user, setUser } = useContext(UserContext);

  return (
    <>
        <h1>
          HomePage: <small>{user?.name}</small>
        </h1>
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

// export const HomePage = () => {
//   return (
//     <>
//         <h1>HomePage</h1>
//         <hr/>
//     </>
//   )
// }

//----------------------------

// import { useContext } from "react"
// import { UserContext } from "./context/UserContext"

// export const HomePage = () => {

//   const {user} = useContext(UserContext);

//   return (
//     <>
//         <h1>
//           HomePage: <small>{user.name}</small>
//         </h1>
//         <hr/>

//         <pre>
//           {JSON.stringify( user , null, 3 )}
//         </pre>
//     </>
//   )
// }