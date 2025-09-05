const weddingDate = new Date(2025, 9, 30, 0, 0, 0); // October (month 9 in 0-based)

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
  const playBtn = document.getElementById('playMusicBtn');

  playBtn.style.display = 'none'; // Hide initially

  // Try autoplay muted (which browsers allow)
  music.play().then(() => {
    // Autoplay success (muted), show play button to unmute
    playBtn.style.display = "block";
    playBtn.textContent = "🔊 Play Music";
  }).catch(() => {
    // Autoplay failed, show play button
    playBtn.style.display = "block";
    playBtn.textContent = "🔊 Play Music";
  });

  // Toggle play/pause & mute/unmute on button click
  playBtn.addEventListener('click', () => {
    if (music.paused) {
      music.muted = false;
      music.play();
      playBtn.textContent = "⏸️ Stop Music";
    } else {
      music.pause();
      playBtn.textContent = "🔊 Play Music";
    }
  });

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
