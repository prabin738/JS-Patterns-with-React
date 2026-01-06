import React from "react";

const LastIndexOf = () => {
  // Task 1) Use lastIndexOf to find the last "o" in "cool workflow".
  const word = "cool workflow";
  const finalWord = word.lastIndexOf("o");
  alert(finalWord);
  return <div>LastIndexOf</div>;
};

export default LastIndexOf;
