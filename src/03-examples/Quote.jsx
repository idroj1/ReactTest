// import { useLayoutEffect, useRef, useState } from "react"

// export const Quote = ({author, quote}) => {

//   const pRef = useRef();
//   const [boxSize, setBoxSize] = useState({ width: 0, height: 0});

//   useLayoutEffect(() => {

//     // console.log(pRef.current.getBoundingClientRect());

//     const { height, width } = pRef.current.getBoundingClientRect();
//     setBoxSize({ height, width });

//   }, [quote])

//   return (
//     <>
//     <blockquote
//     className="blockquote text-end"
//     style={{display: 'flex'}}
//     >
//           <p
//           className="mb-2"
//           ref={pRef}
//           >
//             {/* Hola Mundo */}
//             {/* {data[0].quote} */}
//             {quote}
//           </p>
//           <footer className="blockquote-footer mb-2">
//             {/* J. M. */}
//             {/* {data[0].author} */}
//             {author}
//           </footer>
//         </blockquote>

//         <code>{ JSON.stringify(boxSize) }</code>
//     </>
//   )
// }

// -----------------------------------------

// export const Quote = ({author, quote}) => {

//   return (
//     <>
//     <blockquote
//     className="blockquote text-end"
//     >
//           <p
//           className="mb-2"
//           >
//             {quote}
//           </p>
//           <footer className="blockquote-footer mb-2">
//             {author}
//           </footer>
//         </blockquote>
//     </>
//   )
// }

// -----------------------------------------

// import { useLayoutEffect, useRef } from "react"

// export const Quote = ({author, quote}) => {

//   const pRef = useRef();

//   useLayoutEffect(() => {

//     console.log(pRef.current.getBoundingClientRect());

//   }, [quote])

//   return (
//     <>
//     <blockquote
//     className="blockquote text-end"
//     style={{display: 'flex'}}
//     >
//           <p
//           className="mb-2"
//           ref={pRef}
//           >
//             {quote}
//           </p>

//           <footer className="blockquote-footer mb-2">
//             {author}
//           </footer>

//         </blockquote>
//     </>
//   )
// }

// -----------------------------------------

import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [quote]);

  return (
    <>
      <blockquote 
      className="blockquote text-end" 
      style={{ display: "flex" }}
      >
        <p className="mb-2" ref={pRef}>
          {quote}
        </p>

        <footer className="blockquote-footer mb-2">
          {author}
        </footer>

      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  );
};
