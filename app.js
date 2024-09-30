const volumeIcon = document.getElementById('volumeIcon');
const shashwatIcon = document.getElementById('happyshash');
const chikniChameli = new Audio("./assets/chiknicut.mp3");
const bigContainer = document.querySelector('.big-zone');
const smallContainer = document.querySelector('.small-zone');

let leftGifDiv, rightGifDiv;

function pictimeHandler() {
    const containerRect = bigContainer.getBoundingClientRect();
    const randomX = Math.floor(Math.random() * (containerRect.width - 50));
    const randomY = Math.floor(Math.random() * (containerRect.height - 50));
    const newImg = document.createElement('img');
    newImg.src = "./assets/Shahswat.png";
    newImg.classList.add('random-img');
    newImg.style.left = randomX + 'px';
    newImg.style.top = randomY + 'px';
    bigContainer.appendChild(newImg);

    setTimeout(() => {
        bigContainer.removeChild(newImg);
    }, 800);
}

function dancegifHandler() {
    leftGifDiv = document.createElement('img');
    leftGifDiv.classList.add('gif-div');
    leftGifDiv.src = "./assets/sashhwatdance.gif";
    leftGifDiv.style.position = 'absolute';
    leftGifDiv.style.left = '50px';  
    rightGifDiv = document.createElement('img');
    rightGifDiv.classList.add('gif-div');
    rightGifDiv.src = "./assets/sashhwatdance.gif";
    rightGifDiv.style.position = 'absolute';
    rightGifDiv.style.right = '50px'; 
    smallContainer.appendChild(leftGifDiv);
    smallContainer.appendChild(rightGifDiv);
}

function removeGif() {
    if (leftGifDiv) {
        smallContainer.removeChild(leftGifDiv);
        leftGifDiv = null;
    }
    if (rightGifDiv) {
        smallContainer.removeChild(rightGifDiv);
        rightGifDiv = null;
    }
}

let player;

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    if (chikniChameli.paused) {
      chikniChameli.play();
      volumeIcon.src = "./assets/volume-on.png";
      shashwatIcon.src = "./assets/happy_sashwat.gif";
      dancegifHandler();
      player = setInterval(pictimeHandler, 1000);
    } else {
      chikniChameli.pause();
      volumeIcon.src = "./assets/volume-mute.png";
      shashwatIcon.src = "./assets/sad_shashwat.png";
      clearInterval(player);
      removeGif();
    }
  }
}); 