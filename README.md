# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sabao72/lotide`

**Require it:**

`const _ = require('@sabao72/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: This function will compare the two values it takes in and print out a message telling us if they match or not.
* `head`: This function will return the first item in the array.
* `tail`: This function will return the "tail" of an array: everything except for the first item (head) of the provided array.
* `eqArrays`: This function will take in two arrays and returns true or false, based on a perfect match.
* `assertArraysEqual`: This function will take in two arrays and console.log an appropriate message to the console.
* `without`: This function will return a subset of a given array, removing unwanted elements.
* `flatten`: This function will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `middle`: This function will take in an array and return the middle-most element(s) of the given array.
* `countLetters`: This function will take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `letterPositions`: This function will return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue`: This function will scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `eqObjects`: This function will take in two objects and returns true or false, based on a perfect match.
* `assertObjectsEqual`: This function will take in two objects and console.log an appropriate message to the console.
* `takeUnit`: This function will keep collecting items from a provided array until the callback provided returns a truthy value.
* `findKey`: This function will take in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `countOnly`: This function will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `middle`: This function will find the middle values in an array