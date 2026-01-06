import React from "react";

const Reduce = () => {
  // Mini Task: Count Occurrences using reduce()
  // You are given an array of tags:
  //   const tags = ["react", "js", "react", "css", "js", "react"];
  // Goal: Use reduce() to count how many times each tag appears
  // Expected Output:
  // {
  //   react: 3,
  //   js: 2,
  //   css: 1
  // }
  // Mini Task: Count Occurrences using reduce()

  // Given array of tags:
  const tags = ["react", "js", "react", "css", "js", "react"];

  // Use reduce() to build an object of counts:
  const counts = tags.reduce((acc, tag) => {
    // If the tag already exists in the accumulator object,
    // increment its count by 1
    if (acc[tag]) {
      acc[tag] += 1;
    } else {
      // Otherwise, initialize it with 1
      acc[tag] = 1;
    }

    // Always return the updated accumulator
    return acc;
  }, {}); // Start with an empty object as the initial value

  console.log(counts);
  // Expected Output:
  // { react: 3, js: 2, css: 1 }

  return <div>Reduce </div>;
};

export default Reduce;
