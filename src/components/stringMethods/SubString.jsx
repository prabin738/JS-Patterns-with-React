import React from "react";

const SubString = () => {
  // 1) Use substring to get "React" from "ReactJS".
  const str = "ReactJS";
  const finalWord = str.substring(0, 5);
  alert(finalWord);
  return <div>SubString</div>;
};

export default SubString;
