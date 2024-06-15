import React from "react";

function NameList() {
  const names = ["Ray", "Andy", "Nate"];
  return (
    <div>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}

export default NameList;
