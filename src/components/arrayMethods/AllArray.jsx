import React from "react";

export const AllArray = () => {
  // Task 1: Add a new item to the end of an array
  // Array: ["apple", "banana"]
  // Goal: Add "orange"
  // Hint: Use push()

  const fruits = ["apple", "banana"];
  fruits.push("orange");
  //   console.log(fruits);

  // Task 2: Remove the last item from the array
  // Array: ["apple", "banana", "orange"]
  // Goal: Remove the last element
  // Hint: Use pop()

  const fruits1 = ["apple", "banana", "orange"];
  fruits1.pop();
  //   console.log(fruits1);

  // Task 3: Remove the first item from the array
  // Array: ["apple", "banana", "orange"]
  // Goal: Remove the first element
  // Hint: Use shift()
  const fruits2 = ["apple", "banana", "orange"];
  fruits2.shift();
  //   console.log(fruits2);

  // Task 4: Add an item to the beginning of the array
  // Array: ["banana", "orange"]
  // Goal: Add "apple" at the start
  // Hint: Use unshift()
  const fruits3 = ["banana", "orange"];
  fruits3.unshift("apple");
  //   console.log(fruits3);

  // Task 5: Check if an array contains a specific element
  // Array: ["apple", "banana", "orange"]
  // Goal: Check if "banana" exists
  // Hint: Use includes()
  const fruits4 = ["apple", "banana", "orange"];
  const result = fruits4.includes("banana");
  console.log(result);

  // Task 6: Find the index of an element in the array
  // Array: ["apple", "banana", "orange"]
  // Goal: Get index of "orange"
  // Hint: Use indexOf()
  const arr = ["apple", "banana", "orange"];
  const result1 = arr.indexOf("orange");
  console.log(result1);

  // Task 7: Copy a part of the array without modifying the original
  // Array: ["apple", "banana", "orange", "mango"]
  // Goal: Get ["banana", "orange"]
  // Hint: Use slice(start, end)
  const arr1 = ["apple", "banana", "orange", "mango"];
  const result2 = arr1.slice(1, 3);
  console.log(result2);

  // Task 8: Remove or replace elements in an array
  // Array: ["apple", "banana", "orange", "mango"]
  // Goal: Remove "banana" and "orange"
  // Hint: Use splice(startIndex, deleteCount)
  const spl = ["apple", "banana", "orange", "mango"];
  spl.splice(1, 2);
  console.log(spl);

  // Task 9: Convert an array into a string
  // Array: ["apple", "banana", "orange"]
  // Goal: Convert to "apple, banana, orange"
  // Hint: Use join(separator)
  const newArray = ["apple", "banana", "orange"];
  const join = newArray.join(",");
  console.log(join);

  // Task 10: Transform each element of the array
  // Array: [1, 2, 3]
  // Goal: Multiply each number by 2
  // Hint: Use map()
  const newArr = [1, 2, 3];
  const newRes = newArr.map((n) => n * 2);
  console.log(newRes);

  return <div>AllArray</div>;
};
