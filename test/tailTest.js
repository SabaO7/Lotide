const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return an empty array for an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("should return the tail (all elements except the first) of the array", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0], "Lighthouse");
    assert.strictEqual(result[1], "Labs");
  });
});
