
import React from "react";

export const ShowIncrement = React.memo(({ incrementChild }) => {

    console.log('Me volvi a generar.');
    
    return (
    <>

    <button
    className="btn btn-primary mt-2"
    onClick={() => {
        incrementChild(5);
    }}
    >
        Incrementar
    </button>

    </>
    )
})

//------------------------------------

// import React from "react";

// export const ShowIncrement = ({ incrementChild }) => {    
//     return (
//     <>

//     <button
//     className="btn btn-primary mt-2"
//     onClick={() => {
//         incrementChild();
//     }}
//     >
//         Incrementar
//     </button>

//     </>
//     )
// }
