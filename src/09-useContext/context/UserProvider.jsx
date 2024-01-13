
import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

// --------------------

// import { UserContext } from "./UserContext";

// export const UserProvider = ({children}) => {
//   return (
//     <UserContext.Provider value={{hola: 'Mundo'}}>
//         {children}
//     </UserContext.Provider>
//   )
// }

//-------------------------------

// import { UserContext } from "./UserContext";

// const usuario = {
//     id: 123,
//     name: 'Juan Lopez',
//     email: 'juanlopez@gmail.com',
// }

// export const UserProvider = ({children}) => {
//   return (
//     <UserContext.Provider value={{hola: 'Mundo', user: usuario}}>
//         {children}
//     </UserContext.Provider>
//   )
// }