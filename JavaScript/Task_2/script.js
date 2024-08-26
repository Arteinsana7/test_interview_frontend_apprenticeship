// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  //  This gets a reference to the button by its ID
  const button = document.getElementById("changeTextButton");

  //  I have defined a flag to keep track of which text is currently displayed
  let isOriginalText = true;

  // I have defined a function that toggles the button's text content
  function changeButtonText() {
    if (isOriginalText) {
      button.textContent = "New Text";
    } else {
      button.textContent = "Change Text";
    }
    // Toggle the flag
    isOriginalText = !isOriginalText;
  }

  // Then i had added a click event listener to the button that calls the changeButtonText function when clicked
  button.addEventListener("click", changeButtonText);
});
