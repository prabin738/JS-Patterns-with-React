import React from "react";

const Join = () => {
  // 5. join()
  // Challenge: Convert words into a sentence.
  // Input: ["React", "is", "powerful"]
  // Output: "React is powerful"
  // Hint: Join with space.

  let words = ["React", "is", "powerful"];
  let sentence = words.join(" ");
  console.log(sentence);
  alert(sentence);

  return <div>Join</div>;
};

export default Join;
