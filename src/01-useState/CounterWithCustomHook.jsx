
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset, increment_2, decrement_2 } =
    useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" 
      onClick={() => increment_2(2)}>
        +2
      </button>

      <button className="btn btn-primary" 
      onClick={increment}>
        +1
      </button>

      <button className="btn btn-primary" 
      onClick={reset}>
        Reset
      </button>

      <button className="btn btn-primary" 
      onClick={decrement}>
        -1
      </button>

      <button className="btn btn-primary" 
      onClick={() => decrement_2(2)}>
        -2
      </button>
    </>
  );
};

// -------------------------

// import { useCounter } from "../hooks/useCounter";

// export const CounterWithCustomHook = () => {

//   const { counter } = useCounter();

//   return (
//     <>
//     <h1>Counter with hook: { counter }</h1>
//     <hr/>

//     <button className="btn btn-primary">+1</button>
//     <button className="btn btn-primary">Reset</button>
//     <button className="btn btn-primary">-1</button>
//     </>
//   )
// }

