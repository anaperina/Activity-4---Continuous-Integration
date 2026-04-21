function add(a, b) {
  let result = a + b;
  return result;
}

function multiply(a, b) {
  let result = a * b;
  return result; // REMOVED the + 1
}

function isOdd(num) {
  // CHANGED == 0 to != 0 to correctly identify odd numbers
  return num % 2 !== 0; 
}

module.exports = { add, multiply, isOdd }