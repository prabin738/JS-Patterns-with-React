import React from "react";

const AllObjects = () => {
  //   const users = { name: "Prabin", age: 25, country: "Nepal" };
  //   const keys = Object.keys(users);
  //   console.log(keys);

  // Mini Task: Create an object let car = { brand: "Tesla", model: "X" } and use Object.keys to get ["brand", "model"].
  //   const car = { brand: "Tesla", model: "X" };
  //   const keys = Object.keys(car);
  //   console.log(keys);

  // Mini Task: Create an object let menu = { burger: 5, fries: 2 } and use Object.values to get the prices [5, 2].
  //   const menu = { burger: 5, fries: 2 };
  //   const value = Object.values(menu);
  //   console.log(value);

  // Mini Task: Create let person = { first: "John", last: "Doe" } and use Object.entries to see the pairs.
  //   const person = { first: "John", last: "Doe" };
  //   const pairs = Object.entries(person);
  //   console.log(pairs);

  // Mini Task: Create { a: 1 } and { b: 2 } and merge them into a new object using Object.assign.
  //   const first = { a: 1 };
  //   const second = { b: 2 };
  //   const combined = Object.assign(first, second);
  //   console.log(combined);

  // Mini Task: Create an object let profile = { id: 101 }, freeze it,
  // and try to change the id to 200. Check if it stayed 101.

  let profile = { id: 101 };
  Object.freeze(profile);
  profile.id = 301;
  console.log(profile);

  return <div>AllObjects</div>;
};

export default AllObjects;
