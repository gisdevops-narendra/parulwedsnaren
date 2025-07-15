const weddingDate = new Date(2025, 9, 22, 0, 0, 0); // October is 9 (zero-based)

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        document.getElementById("liveCountdown").textContent = "🎉 It's the Wedding Day!";
        document.getElementById("daysLeft").textContent = "";
        document.getElementById("weeksLeft").textContent = "";
        return;
    }

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);

    document.getElementById("daysLeft").textContent = `🗓️ Total Days Left: ${days}`;
    document.getElementById("weeksLeft").textContent = `📅 Weeks Left: ${weeks}`;
    document.getElementById("liveCountdown").textContent =
        `⏰ Time Left: ${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`;
}

window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bgMusic');
    const tryPlay = () => {
        music.play().catch(() => {
            document.body.addEventListener('click', () => music.play(), { once: true });
        });
    };
    tryPlay();
});

setInterval(updateCountdown, 1000);
updateCountdown();
