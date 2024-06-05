import React from "react";

//function Greet() {
//    return <h1>Hello ZL</h1>
//}

// named export (MUST use this name)
export const Greet = (props) => {
  console.log(props);
  return (
    <div> 
    <h1>Hello {props.name} </h1>
        {props.children};
    </div>)
};

// ES6 function syntax
// export default Greet
