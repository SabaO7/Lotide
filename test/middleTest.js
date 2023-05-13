const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return an empty array for an array with 2 or fewer elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return the middle element for an array with odd length", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return the middle two elements for an array with even length", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});