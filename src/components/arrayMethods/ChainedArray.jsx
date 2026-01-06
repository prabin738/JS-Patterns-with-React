import React from "react";

const ChainedArray = () => {
  // Chained Array Challenge:

  // 1. You have this array of numbers:
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // 2. Your goal:
  // - First, keep only the even numbers
  // - Then, multiply each remaining number by 3
  // - Finally, convert the result into a string, with numbers separated by " - "

  // Hint chain:
  // - Use filter() to get even numbers
  // - Use map() to multiply each number
  // - Use join(" - ") to create a single string

  // Example expected result: "6 - 12 - 18 - 24 - 30"

  return <div>ChainedArray</div>;
};

export default ChainedArray;
