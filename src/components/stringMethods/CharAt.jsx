import React from "react";

const CharAt = () => {
  // 1) Use charAt to get the 3rd character of "Kathmandu".
  let place = "Kathmandu";
  let index = place.charAt(3);
  //   alert(index);
  console.log(index); //output must be h cuz k=0, a=1, t=2, h=3

  return <div>CharAt</div>;
};

export default CharAt;
