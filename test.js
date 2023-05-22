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


console.log(middle([1])) // => []
console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])) 