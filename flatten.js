const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  let flattenedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArr.push(arr[i][j]);
      }
    } else {
      flattenedArr.push(arr[i]);
    }
  }

  return flattenedArr;
};

// Test case
let result = flatten([1, 2, [3, 4], 5, [6]]);
console.log(result); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]); // Should pass
