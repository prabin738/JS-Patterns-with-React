import React from "react";

const Includes = () => {
  // 1. includes()
  // Challenge: Check if a menu contains "Soda".
  // Input: "Burger, Pizza, Fries"
  // Output: false
  // Hint: Use .includes()

  // let menu = "Burger, Pizza, Fries";
  // let check = menu.includes("Soda");
  // console.log(check); //answer must be fasle cuz soda is not on the list
  // alert(check);

  // Task 2) Use includes to check if "Tailwind CSS" contains "CSS".
  const word = "Tailwind CSS";
  const finalWord = word.includes("CSS");
  alert(finalWord);
  console.log(finalWord);

  return <div>Includes</div>;
};

export default Includes;
