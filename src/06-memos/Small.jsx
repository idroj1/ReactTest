
import React from 'react';

export const Small = React.memo(({ value }) => {

  console.log("Me volvi a usar");

  return (
    <>
      <small>{value}</small>
    </>
  );
});

//---------------------------------

// export const Small = ({ value }) => {

//   console.log("Me volvi a usar");

//   return (
//     <>
//       <small>{value}</small>
//     </>
//   );
// };

//---------------------------------

// import { memo } from 'react'

// export const Small = memo(({ value }) => {

//   console.log("Me volvi a usar");

//   return (
//     <>
//       <small>{value}</small>
//     </>
//   );
// });