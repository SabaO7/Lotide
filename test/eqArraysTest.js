const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


const actual = eqArrays([1, 2, 3], [1, 2, 3]);

const expected = true

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(actual, expected);