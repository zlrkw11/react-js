import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greeHandler('child')}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
