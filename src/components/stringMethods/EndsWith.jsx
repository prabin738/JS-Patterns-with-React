import React from "react";

const EndsWith = () => {
  // 3. endsWith()
  // Challenge: Check if a file is a PDF.
  // Input: "resume.pdf"
  // Output: true
  // Hint: Use .endsWith(".pdf").
  let fileName = "resume.pdf";
  let fileType = fileName.endsWith(".pdf");
  console.log(fileType); //output must be true cuz filetype is pdf
  alert(fileType);

  return <div>EndsWith</div>;
};

export default EndsWith;
