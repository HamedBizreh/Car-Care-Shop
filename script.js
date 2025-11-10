// Basic popup video script

const openBtn = document.getElementById('openVideo');
const popup = document.getElementById('videoPopup');
const closeBtn = document.getElementById('closePopup');
const video = document.getElementById('popupVideo');

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'flex';
  video.currentTime = 0;
  video.play();
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  video.pause();
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    video.pause();
  }
});
