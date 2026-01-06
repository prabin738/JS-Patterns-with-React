import React from "react";

const IndexOf = () => {
  // Task 1) Use indexOf to find the position of "JS" in "Learning JS daily".
  const sentence = "Learning JS daily";
  let finalWord = sentence.indexOf("JS");
  //   alert(finalWord);
  console.log(finalWord);

  return <div>IndexOf</div>;
};

export default IndexOf;
