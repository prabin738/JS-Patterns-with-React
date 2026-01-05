import React from "react";

const Split = () => {
  //   4. split()
  // Challenge: Count the number of words in a sentence.
  // Input: "React makes UI development easy"
  // Output: 5
  // Hint: Split by space and check length.

  let words = "React makes UI development easy";
  let separate = words.split(" ");
  let count = separate.length;
  console.log(count);
  alert(count);

  return <div>Split</div>;
};

export default Split;
