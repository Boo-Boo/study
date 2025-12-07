const { remote } = require('electron');

// Target Date: November 8, 2031
const targetDate = new Date('2031-11-08T00:00:00+09:00');

function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('timer').innerText = "ARRIVED";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Format with leading zeros
    const h = hours.toString().padStart(2, '0');
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');

    document.getElementById('timer').innerText = `${days}d ${h}h ${m}m ${s}s`;
}

// Update every second
setInterval(updateTimer, 1000);
updateTimer(); // Initial call

// Close button logic
document.getElementById('close-btn').addEventListener('click', () => {
    window.close();
});
