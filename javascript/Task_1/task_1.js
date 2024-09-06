// Task 1

/* This function takes an array of numbers as input and returns a new array containing only the even numbers.
 The `filter` method creates a new array with all elements that pass the test implemented by the provided callback function.
 The condition `number % 2 === 0` checks if a number is even.
 The modulo operator `%` returns the remainder of dividing `number` by `2`.
If the remainder is `0`, then the number is even, so it gets included in the new array. */

function getEvenNumbers(numbers) {
  return numbers.filter(
    (number) => typeof number === "number" && number % 2 === 0
  );
}

// Example:
let array = [1, 2, 3, 4, 5, 6, 23, 33, 44, 35, 39, 13, 22, 17, 49808];
let evenNumbers = getEvenNumbers(array);

console.log(evenNumbers);

// Module.exports exports the function to be able to create a new file for tests.
module.exports = getEvenNumbers;
