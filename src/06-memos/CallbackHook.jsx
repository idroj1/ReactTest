
import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(
      (value) => {
        setCounter( (v) => v + value );
      },
      [],
    )

    return (
    <>

    <h1>useCallback Hook: { counter }</h1>
    <hr/>

    <ShowIncrement incrementChild={ increment }/>

    </>
    )
}

//--------------------------------

// import { useState } from "react";
// import { ShowIncrement } from "./ShowIncrement";

// export const CallbackHook = () => {

//   const [counter, setCounter] = useState(10);

//   const increment = () => {
//     setCounter(counter + 1);
//   }

//   return (
//     <>
//     <h1>useCallback Hook: { counter }</h1>
//     <hr/>

//     <ShowIncrement incrementChild={ increment }/>
//     </>
//   )
// }

//------------------------------------

// import { useState, useCallback } from "react";
// import { ShowIncrement } from "./ShowIncrement";

// export const CallbackHook = () => {
  
//   const [counter, setCounter] = useState(10);

//   const increment = useCallback(() => {
//       setCounter((value) => value + 1 );
//     },[],
//   )

//   return (
//     <>
//     <h1>useCallback Hook: { counter }</h1>
//     <hr/>

//     <ShowIncrement incrementChild={ increment }/>
//     </>
//   )
// }

//---------------------------------

// import { useState, useEffect, useCallback } from "react";
// import { ShowIncrement } from "./ShowIncrement";

// export const CallbackHook = () => {
  
//   const [counter, setCounter] = useState(10);

//   const increment = useCallback(() => {
//       setCounter((value) => value + 1 );
//     },[],
//   )

//       useEffect(() => {
//         increment();
//     }, [increment]);

//   return (
//     <>
//     <h1>useCallback Hook: { counter }</h1>
//     <hr/>

//     <ShowIncrement incrementChild={ increment }/>
//     </>
//   )
// }