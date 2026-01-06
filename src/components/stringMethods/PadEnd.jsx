import React from "react";

const PadEnd = () => {
  // 5) Use padEnd to make "Prabin" exactly 10 characters with dots at the end.
  const name = "Prabin";
  const finalName = name.padEnd(10, ".");
  //   alert(finalName);
  console.log(finalName);
  return <div>PadEnd</div>;
};

export default PadEnd;
