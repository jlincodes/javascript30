// Get out elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// Build out functions
function togglePlay() {

  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }

  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  // this is the video because video is bound by the event listener
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  
}

// Hook up the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
