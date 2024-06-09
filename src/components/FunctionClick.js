import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("button is clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  );
}

export default FunctionClick;
