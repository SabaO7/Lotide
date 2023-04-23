const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  const midIndex = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return [arr[midIndex - 1], arr[midIndex]];
  } else {
    return [arr[midIndex]];
  }
};

console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, "7"]));
console.log(middle([1, 2, 3, 4, 5, 6]));
