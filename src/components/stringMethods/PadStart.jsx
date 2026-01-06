import React from "react";

const PadStart = () => {
  // 4) Use padStart to format "42" as a 5-digit order ID (e.g., "00042").
  const num = "42";
  const finalNum = num.padStart(5, "0");
  //   alert(finalNum);
  console.log(finalNum);

  return <div>PadStart</div>;
};

export default PadStart;
