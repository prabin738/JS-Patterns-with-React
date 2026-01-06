import React from "react";

const EndsWith = () => {
  // 3. endsWith()
  // Challenge: Check if a file is a PDF.
  // Input: "resume.pdf"
  // Output: true
  // Hint: Use .endsWith(".pdf").
  // let fileName = "resume.pdf";
  // let fileType = fileName.endsWith(".pdf");
  // console.log(fileType); //output must be true cuz filetype is pdf
  // alert(fileType);

  // Task 2) Use endsWith to verify if "index.html" ends with ".html".
  const file = "index.html";
  const type = file.endsWith(".html");
  alert(type);
  return <div>EndsWith</div>;
};

export default EndsWith;
