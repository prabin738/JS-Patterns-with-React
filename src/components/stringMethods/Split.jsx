import React from "react";

const Split = () => {
  //   4. split()
  // Challenge 1: Count the number of words in a sentence.
  // Input: "React makes UI development easy"
  // Output: 5
  // Hint: Split by space and check length.

  // let words = "React makes UI development easy";
  // let separate = words.split(" ");
  // let count = separate.length;
  // console.log(count);
  // alert(count);

  // Task 2) Use split to turn "react,tailwind,router" into an array of 3 items.
  // let words = "react, tailwind, router";
  // let arr = words.split(",");
  // // alert(arr);
  // console.log(arr);

  // Task 3) Combine split + join to convert "a-b-c-d" into "a/b/c/d".
  const str = "a-b-c-d";
  const finalStr = str.split("-").join("/");
  alert(finalStr);

  return <div>Split</div>;
};

export default Split;
