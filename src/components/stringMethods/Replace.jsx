import React from "react";

const Replace = () => {
  // 9) Use replace to change all "-" to "/" in "2026-01-05".
  const date = "2026-01-05";
  const finalDate = date.replaceAll("-", "/");
  // alert(finalDate);
  console.log(finalDate);
  return <div>Replace</div>;
};

export default Replace;
