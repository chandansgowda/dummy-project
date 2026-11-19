const button = document.getElementById("demoButton");
const message = document.getElementById("message");

let count = 0;

button.addEventListener("click", () => {
    count++;

    message.textContent =
        `Button clicked ${count} times! Your contribution works.`;
});