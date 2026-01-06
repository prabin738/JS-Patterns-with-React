import React from "react";

const ToLowerCase = () => {
  // 7) Use toLowerCase to normalize "ReAcT RoUtEr DoM".
  const word = "ReAcT RoUtEr DoM";
  const finalWord = word.toLowerCase();
  // alert(finalWord);
  console.log(finalWord);

  return <div>ToLowerCase</div>;
};

export default ToLowerCase;
