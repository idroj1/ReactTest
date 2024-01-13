
import { useFetch, useCounter } from "../hooks/hooks_index";
import { LoadingQuote, Quote } from "./03-example_index";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  /*
  Pagina web a buscar direccion de quotes:
  https://breakingbadquotes.xyz/
  */
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
      isLoading 
      ? <LoadingQuote /> 
      : <Quote author={author} quote={quote} />
      }

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      >
        Next quote
      </button>
    </>
  );
};

//-------------------------

// import { useFetch } from "../hooks/hooks_index";

// export const MultipleCustomHooks = () => {
  
//   const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`);

//   console.log({ data, isLoading, hasError });
  
//   // if (isLoading) {
//   //   return (
//   //     <h1>Cargando...</h1>
//   //   )
//   // }

//   const { quote, author } = !!data && data[0];

//   return (
//     <>
//       <h1>BreakingBad Quotes</h1>
//       <hr />

//       {isLoading ? (
//         <div className="alert alert-info text-center">Loading...</div>
//       ) : (
//         <blockquote className="blockquote text-end">
//           <p className="mb-2">
//             {quote}
//           </p>
//           <footer className="blockquote-footer mb-2">
//             {author}
//           </footer>
//         </blockquote>
//       )}

//       {/* <div className="alert alert-info text-center">
//         Loading . . .
//       </div>

//       <blockquote className="blockquote text-end">
//         <p className="mb-2">
//           Hola Mundo
//         </p>
//         <footer className="blockquote-footer">
//           Juan Perez
//         </footer>
//       </blockquote> */}

//     </>
//   );
// };

//-------------------------

// import { useFetch } from "../hooks/hooks_index";

// export const MultipleCustomHooks = () => {
  
//   const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1`);

//   console.log({ data, isLoading, hasError });
  
//   // if (isLoading) {
//   //   return (
//   //     <h1>Cargando...</h1>
//   //   )
//   // }

//   const { quote, author } = !!data && data[0];

//   return (
//     <>
//       <h1>BreakingBad Quotes</h1>
//       <hr />

//       {isLoading ? (
//         <div className="alert alert-info text-center">Loading...</div>
//       ) : (
//         <blockquote className="blockquote text-end">
//           <p className="mb-2">
//             {quote}
//           </p>
//           <footer className="blockquote-footer mb-2">
//             {author}
//           </footer>
//         </blockquote>
//       )}
      
//       <button className="btn btn-primary">
//         Next quote
//       </button>

//     </>
//   );
// };

//-------------------------

// import { useFetch } from "../hooks/useFetch";
// import { useCounter } from "../hooks/useCounter";

// export const MultipleCustomHooks = () => {
  
//   const { counter, increment } = useCounter(1);

//   const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

//   const { quote, author } = !!data && data[0];

//   return (
//     <>
//       <h1>BreakingBad Quotes</h1>
//       <hr />

//       {isLoading ? (
//         <div className="alert alert-info text-center">Loading...</div>
//       ) : (
//         <blockquote className="blockquote text-end">
//           <p className="mb-2">
//             {quote}
//           </p>
//           <footer className="blockquote-footer mb-2">
//             {author}
//           </footer>
//         </blockquote>
//       )}
      
//       <button
//         className="btn btn-primary"
//         disabled={isLoading}
//         onClick={() => increment()}
//       >
//         Next quote
//       </button>

//     </>
//   );
// };