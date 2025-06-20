const video = document.getElementById("main-video");
const playPauseBtn = document.getElementById("play-pause");
const progressBar = document.getElementById("progress");
const timeDisplay = document.getElementById("time-display");
const muteBtn = document.getElementById("mute-unmute");
const volumeSlider = document.getElementById("volume");
const fullscreenBtn = document.getElementById("fullscreen");
const playlist = document.getElementById("playlist");
const playlistItems = playlist.querySelectorAll("li");

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

// Play/Pause toggle
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    video.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// Update progress bar as video plays
video.addEventListener("timeupdate", () => {
  if (video.duration) {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.value = percent;
    timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
  }
});

// Seek video when user changes progress bar
progressBar.addEventListener("input", () => {
  if (video.duration) {
    video.currentTime = (progressBar.value / 100) * video.duration;
  }
});

// Mute/Unmute toggle
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔇" : "🔈";
  volumeSlider.value = video.muted ? 0 : video.volume;
});

// Volume slider
volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
  video.muted = video.volume === 0;
  muteBtn.textContent = video.muted ? "🔇" : "🔈";
});

// Fullscreen toggle
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

// Playlist click handler
playlistItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Set active style
    playlistItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // Change video source
    const src = item.getAttribute("data-src");
    video.src = src;
    video.load();
    video.play();
    playPauseBtn.textContent = "⏸️";
  });
});

// Reset play button when video ends
video.addEventListener("ended", () => {
  playPauseBtn.textContent = "▶️";
});
