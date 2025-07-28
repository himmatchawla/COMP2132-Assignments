let currentImage = 1;
let animationRunning = false;
let animationFrameId;
let popupTimer;
const bikeImage = document.getElementById('bikeImage');
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const popup = document.getElementById('popup');
const closePopupX = document.getElementById('closePopupX');

// animation
function updateBikeImage() {
  if (!animationRunning) return;

  currentImage++;
  if (currentImage > 34) currentImage = 1;

  bikeImage.src = `product-images/bike-${currentImage}.jpg`;

  setTimeout(() => {
    if (animationRunning) {
      animationFrameId = requestAnimationFrame(updateBikeImage);
    }
  }, 100);
}

// startbutton
startButton.addEventListener('click', () => {
  if (!animationRunning) {
    animationRunning = true;
    cancelAnimationFrame(animationFrameId);
    updateBikeImage();
  }

  // cancel popup if animation started within 3 seconds of page opening
  clearTimeout(popupTimer);
  popup.classList.remove('show');
});


// stopbutton
stopButton.addEventListener('click', () => {
  animationRunning = false;
  cancelAnimationFrame(animationFrameId);
});

// close popup
closePopupX.addEventListener('click', () => {
  popup.classList.remove('show');
});


// show popup after 3 seconds
popupTimer = setTimeout(() => {
  if (!animationRunning) {
    popup.classList.add('show');
  }
}, 3000);
