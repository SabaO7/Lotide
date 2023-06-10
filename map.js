const assertArraysEqual = require('./assertArraysEqual');


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word.toUpperCase());
assertArraysEqual(results1, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

const results2 = map(words, word => word[0]);
assertArraysEqual(results2, ["g", "c", "t", "m", "t"]);


const results3 = map(words, word => word.repeat(3));
assertArraysEqual(results3, ["groundgroundground", "controlcontrolcontrol", "toto", "majormajormajor", "tomtomtom"]);







