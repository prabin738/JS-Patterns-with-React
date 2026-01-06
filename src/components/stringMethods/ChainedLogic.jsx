import React from "react";

const ChainedLogic = () => {
  // Task 6: Check if input contains "react" ignoring case and extra spaces
  // Input: "   ReAcT hooks   "
  // Output: true
  // Hint: trim(), toLowerCase(), includes()

  //   const sentence = "     ReAcT hooks    ";
  //   const words = sentence.trim().toLocaleLowerCase().includes("react");
  //   alert(words);

  // Task 7: Validate email after trimming (must contain "@" and ".")
  // Input: "  user@gmail.com  "
  // Output: true
  // Hint: trim(), includes()

  //   const email = "    user@gmail.com   ";
  //   const trimmed = email.trim().includes("@") && email.trim().includes(".");
  //   alert(trimmed);

  // Task 8: Convert sentence into URL slug
  // Input: "   Learn React Router Dom   "
  // Output: "learn-react-router-dom"
  // Hint: trim(), toLowerCase(), split(), join()
  //   const sentence = "   Learn React Router Dom   ";
  //   const trimmed = sentence.trim().toLocaleLowerCase().split(" ").join("-");
  //   //   alert(trimmed);
  //   console.log(trimmed);

  // Task 9: Mask phone number except last 4 digits
  // Input: "9876543210"
  // Output: "******3210"
  // Hint: slice(), repeat(), length
  // const number = "9876543210";
  // const lastFour = number.slice(-4);
  // //   console.log(lastFour);
  // const masked = "*".repeat(number.length - 4) + lastFour;
  // console.log(masked);

  // Task 10: Count words in a sentence after cleaning spaces
  // Input: "   build   real   projects   "
  // Output: 3
  // Hint: trim(), split(), filter(), length
  const sentence = "   build   real   projects   ";
  const countWords = sentence.trim().split(/\s+/).length;
  console.log(countWords);

  return <div>ChainedLogic</div>;
};

export default ChainedLogic;
