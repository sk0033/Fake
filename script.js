let timeLeft = 15;
const timerElement = document.getElementById("timer");

// Get the selected post link
let postLink = localStorage.getItem("selectedPostLink") || "https://default.link";

const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft === 0) {
        clearInterval(countdown);
        timerElement.innerHTML = `<button class="continue-button" onclick="goToNextPage()">Continue</button>`;
    }
}, 1000);

function goToNextPage() {
    window.location.href = postLink; 
}
