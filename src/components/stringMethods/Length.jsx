import React from "react";

const Length = () => {
  // Task 1: Check if password length is at least 8 characters

  //   const pass = "react123";
  //   const check = pass.length < 9;
  //   alert(check);

  // Task 2: Check if username is empty after trimming
  //   const username = "      ";
  //   const isEmpty = username.trim() === "";
  //   alert(isEmpty);

  // Task 3: Validate phone number length (must be exactly 10 digits)
  //   const num = "98664982789";
  //   const isNumber = num.length === 10;
  //   console.log(isNumber);
  //   alert(isNumber);
  //   return <div>Length</div>;

  // Task 4: Check if comment exceeds 200 characters
  //   const comment = "This is a comment done by prabin singh thakuri.";
  //   const isExceeds = comment.length > 200;
  //   alert(isExceeds);

  // Task 5: Get length of the longest word in a sentence
  const sentence = "learning react every single day";
  const words = sentence.split(" ");
  //   alert(words);
  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  alert(maxLength);
};

export default Length;
