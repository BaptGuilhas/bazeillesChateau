const buttonPlay = document.getElementById("buttonPlay");
const buttonPause = document.getElementById("buttonPause");
const buttonStop = document.getElementById("buttonStop");
const clip = document.getElementById("clip");

buttonPlay.addEventListener('click', event => {
  clip.play();
});
buttonPause.addEventListener('click', event => {
  clip.pause();
});
buttonStop.addEventListener('click', event => {
  clip.pause();
  clip.currentTime = 0;
});
