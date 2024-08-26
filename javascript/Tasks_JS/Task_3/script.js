// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  const apiEndpoint = "https://jsonplaceholder.typicode.com/todos";

  // created an async function with a promise to fetch the data and then get todos on json.
  async function fetchAndDisplayTodos() {
    try {
      const response = await fetch(apiEndpoint);
      const todos = await response.json();

      // I use the method slice to get the first 5 todos and store it in a const.
      const firstFiveTodos = todos.slice(0, 5);

      // Shuffle the array of the first 5 todos
      shuffleArray(firstFiveTodos);

      // then i get the unordered list element from the DOM
      const todoList = document.getElementById("todoList");

      // Create and append list items to the unordered list in shuffled order
      firstFiveTodos.forEach((todo) => {
        const listItem = document.createElement("li");
        listItem.textContent = todo.title;
        todoList.appendChild(listItem);
      });
    } catch (error) {
      console.error("Error fetching todos:", error); // catch the error in case that the data could not be fetched.
    }
  }

  /* at first didn’t know how to render the title on a unordered list, then i have looked online and 
  i have found the Fisher-Yates algorithm witch i actually didn’t know before. Then i have create a Function to shuffle an array using it with a for loop  */

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  fetchAndDisplayTodos(); //call the async fucntion to fetch and display the todos.
});

// everytime the page is displayed the todos change order.
