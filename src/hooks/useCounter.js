import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const increment_2 = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = () => {
    // if(counter === 0) return;
    setCounter(counter - 1);
  };

  const decrement_2 = (value = 1) => {
    // if(counter === 0) return;
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
    increment_2,
    decrement_2,
  };
};

// --------------------

// import { useState } from "react"

// export const useCounter = ( initialValue = 10 ) => {

//   const [ counter, setCounter ] = useState( initialValue );

//   return {
//     counter,
//   }
// }

