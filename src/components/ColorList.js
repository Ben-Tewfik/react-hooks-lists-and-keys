import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const colorElement = colors.map(color => {
    return (
      <li key={color} style={{ color: color }}>
        {color}
      </li>
    );
  });

  const users = [
    { id: 1, firstName: "Duane", lastName: "Watson" },
    { id: 2, firstName: "Duane", lastName: "Johnson" },
  ];

  const userArr = users.map(user => {
    return (
      <p key={user.id}>
        My name is {user.firstName} {user.lastName}{" "}
      </p>
    );
  });

  const fib = [0, 1, 1, 2, 3, 5];
  const fibNumber = fib.map((number, index) => {
    return <p key={index}>{number}</p>;
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>{colorElement}</ol>
      <div>{userArr}</div>
      <div>{fibNumber}</div>
    </div>
  );
}

export default ColorList;
