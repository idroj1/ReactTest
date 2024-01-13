import { useRef } from "react";

export const FocusScreen = () => {
    
    const inputRef = useRef();
    // let inputRef = '';
    
    const onClick = () => {
        // document.querySelector("input").focus();
        // console.log(inputRef);
        inputRef.current.select();
    };
    
    return (
    <>
    
      <h1>Focus Screen</h1>
      <hr />

      <input
      //   ref={(element)=> inputRef = element}
      ref={inputRef}
      type="text"
      placeholder="Insert focus measure"
      className="form-control"
      />

      <button 
      className="btn btn-primary mt-2" 
      onClick={onClick}>
        Set focus
      </button>

    </>
    );
};

//---------------------------------------

// export const FocusScreen = () => {
  
//   const onClick = () => {
//       document.querySelector("input").focus();
//     };

//   return (
//     <>
    
//       <h1>Focus Screen</h1>
//       <hr />

//       <input
//       type="text"
//       placeholder="Insert focus measure"
//       className="form-control"
//       />

//       <button 
//       className="btn btn-primary mt-2"
//       onClick={onClick}
//       >
//         Set focus
//       </button>

//     </>
//     );
// };
