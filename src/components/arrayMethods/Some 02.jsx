import React from "react";

const Some = () => {
  // Mini Task: Create an array [2, 4, 6, 9] and check if some numbers are odd.

  let num = [2, 4, 6, 9];
  let odd = num.some((nums) => nums % 2 != 0);
  alert(odd);

  return <div>Some </div>;
};

export default Some;
