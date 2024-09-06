// Task_1.test.js

// import getEvenNumbers from "./task_1.js"; // Import function Task_1.js

const getEvenNumbers = require("./task_1.js");

// Test to verify that the fucntion return pairs
test("Filtrer uniquement les nombres pairs dans un tableau mixte", () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = getEvenNumbers(numbers);
  expect(result).toEqual([2, 4, 6]);
});

// Test avec un tableau contenant uniquement des nombres impairs
test("Renvoie un tableau vide si aucun nombre n'est pair", () => {
  const numbers = [1, 3, 5, 7];
  const result = getEvenNumbers(numbers);
  expect(result).toEqual([]);
});

// Test avec un tableau vide
test("Renvoie un tableau vide si le tableau est vide", () => {
  const numbers = [];
  const result = getEvenNumbers(numbers);
  expect(result).toEqual([]);
});

// Test avec des nombres négatifs
test("Fonctionne avec des nombres négatifs et pairs", () => {
  const numbers = [-2, -3, -4, -5, 0];
  const result = getEvenNumbers(numbers);
  expect(result).toEqual([-2, -4, 0]);
});

// Test avec des valeurs non numériques
test("Ignore les valeurs non numériques dans le tableau", () => {
  const numbers = [1, 2, "3", 4, null, 6];
  const result = getEvenNumbers(numbers);
  expect(result).toEqual([2, 4, 6]);
});
