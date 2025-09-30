document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById("counter");
    const incrementButton = document.getElementById("increment-btn");

    let count = 0;

    incrementButton.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = count;
    });
});