import React from "react";

const Includes = () => {
  // 1. includes()
  // Challenge: Check if a menu contains "Soda".
  // Input: "Burger, Pizza, Fries"
  // Output: false
  // Hint: Use .includes()

  let menu = "Burger, Pizza, Fries";
  let check = menu.includes("Soda");
  console.log(check); //answer must be fasle cuz soda is not on the list
  alert(check);

  return <div></div>;
};

export default Includes;
