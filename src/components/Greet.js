import React from "react";

//function Greet() {
//    return <h1>Hello ZL</h1>
//}

// named export (MUST use this name)
export const Greet = (props) => {
  console.log(props);
  return <h1>Hello ZL</h1>;
};
// ES6 function syntax
// export default Greet
