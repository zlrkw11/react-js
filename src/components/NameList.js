import React from "react";

function NameList() {
  const names = ["Ray", "Andy", "Nate"];
  const persons = [
    { id: 1, name: "Ray", age: 20, skill: "React" },
    { id: 2, name: "Andy", age: 20, skill: "React" },
    { id: 3, name: "Nate", age: 20, skill: "React" },
  ];
  const nameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div>
      {/*     {names.map((name) => (
        <h2>{name}</h2>
      ))}  */}
      {nameList}
    </div>
  );
}

export default NameList;
