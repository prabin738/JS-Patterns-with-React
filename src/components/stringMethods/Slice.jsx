import React from "react";

const Slice = () => {
  // 2) Use slice to extract "Naina" from "Kajal Naina Jewellery".

  let office = "Kajal Naina Jewellery";
  let final = office.slice(5, 11);
  // alert(final);
  console.log(final); //answer must be Naina cuz Naina starts at 5 and ends before 11

  return <div>Slice</div>;
};

export default Slice;
