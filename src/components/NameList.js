import React from "react";
import Person from "./Person";

function NameList() {
  // const names = ["Ray", "Andy", "Nate"];
  const persons = [
    { id: 1, name: "Ray", age: 20, skill: "React" },
    { id: 2, name: "Andy", age: 20, skill: "React" },
    { id: 3, name: "Nate", age: 20, skill: "React" },
  ];
  // const nameList = names.map((name) => <h2>{name}</h2>);
  const personList = persons.map((person) => <Person person={person} />);
  return (
    <div>
      {/*     {names.map((name) => (
        <h2>{name}</h2>
      ))}  */}
      {personList}
    </div>
  );
}

export default NameList;
