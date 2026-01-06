import React from "react";

const Trim = () => {
  // 6. trim()
  // Challenge 1: Check if user input is empty after trimming.
  // Input: " "
  // Output: false
  // Hint: Trim first, then check length.

  // 2) Use trim to clean whitespace from "   utility tools   ".
  let words = "   utility tools   ";
  let finalWords = words.trim();
  alert(finalWords);
  // alert(words);

  return <div>Trim</div>;
};

export default Trim;
