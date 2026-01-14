const bikeImage = document.querySelector('.bike-image');
const bikeSound = document.getElementById('bike-sound');

bikeImage.addEventListener('click', () => {
  bikeSound.currentTime = 0; 
  bikeSound.play();
});