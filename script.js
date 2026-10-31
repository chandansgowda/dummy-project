const button = document.getElementById("demoButton");
const message = document.getElementById("message");

button.addEventListener("click" , () => {
  // Intentional issue for the Fork + PR demo
  // Replace this placeholder with the proper success message.
  message.textContent =
    "Your Pull Request fix works! This is a changed message that i have done.";
});
