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

function trackAdClick() {
    window.open('https://ad-redirect-link.com', '_blank');
}
 type="text/javascript">
	atOptions = {
		'key' : 'bdab91e4663d389bc45133c1750fc80b',
		'format' : 'iframe',
		'height' : 300,
		'width' : 160,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/bdab91e4663d389bc45133c1750fc80b/invoke.js"></script>
