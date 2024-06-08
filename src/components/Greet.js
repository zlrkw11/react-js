import React from "react";

//function Greet() {
//    return <h1>Hello ZL</h1>
//}

// named export (MUST use this name)
export const Greet = ({name, children}) => {
  return (
    <div>
      <h1>Hello {name} </h1>
      {children}
    </div>
  );
};

// ES6 function syntax
// export default Greet
