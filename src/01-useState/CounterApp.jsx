import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>

      <hr />

      <button
        // className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...counter,
            counter1: counter1 + 1,
            counter2: counter2 + 1,
            counter3: counter3 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};

// ------------------------------

// import React, { useState } from 'react';

// export const CounterApp = () => {

//   const [counter, setCounter] = useState(10);

//   return (
//     <>
//     <h1>Counter: {counter} </h1>
//     <hr/>

//     <button
//     className="btn btn-primary"
//     onClick={ () => setCounter(counter + 1) }
//     >
//       +1
//     </button>
//     </>
//   )
// }

// ------------------------------

// import React, { useState } from 'react';

// export const CounterApp = () => {

//   const [counter, setCounter] = useState({
//     c1: 10,
//     c2: 20,
//     c3: 30,
//   });

//   return (
//     <>
//     <h1>Counter 1: {counter.c1} </h1>
//     <hr/>
//     <h1>Counter 2: {counter.c2} </h1>
//     <hr/>
//     <h1>Counter 3: {counter.c3} </h1>
//     <hr/>

//     <button
//     className="btn btn-primary"
//     onClick={ () => setCounter({
//       c1: counter.c1 + 1,
//       c2: counter.c2,
//       c3: counter.c3 + 1,
//     }) }
//     >
//       +1
//     </button>
//     </>
//   )
// }