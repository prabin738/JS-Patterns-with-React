import React from "react";

const StartsWith = () => {
  //   2. startsWith()
  // Challenge: Check if a phone number starts with country code "+1".
  // Input: "+1-555-999"
  // Output: true
  // Hint: Use .startsWith("+1").

  // let num = "+1-555-999";
  // let numStart = num.startsWith("+1");
  // console.log(numStart); //output must be true cuz the number starts with +1
  // alert(numStart);

  // Task 2) Use startsWith to verify if "https://vercel.app" starts with "https".
  const domain = "https://vercel.app";
  const type = domain.startsWith("https://");
  // alert(type);
  console.log(type);

  return <div>StartsWith</div>;
};

export default StartsWith;
