const assertEqual = require('../assertEqual');
const tail = require('../tail');


console.log(assertEqual);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
