let homeEl = document.getElementById('home-el');
let homeFoulEl = document.getElementById('home-foul');

let homePoint = 0;

function addHome1() {
  homePoint = homePoint + 1;
  homeEl.textContent = homePoint;
}

function addHome2() {
  homePoint = homePoint + 2;
  homeEl.textContent = homePoint;
}

function addHome3() {
  homePoint = homePoint + 3;
  homeEl.textContent = homePoint;
}

// PRACTICE THIS MORE

function subtractHome3() {
  homePoint = homePoint - 3;
  homeFoulEl.textContent = '!!' + 'FOUL' + '!!';

  setTimeout(function () {
    homeFoulEl.textContent = '';
  }, 2000);
  homeEl.textContent = homePoint;
}

//

let guestEl = document.getElementById('guest-el');
let guestFoulEl = document.getElementById('guest-foul');

let guestPoint = 0;

function addGuest1() {
  guestPoint = guestPoint + 1;
  guestEl.textContent = guestPoint;
}

function addGuest2() {
  guestPoint = guestPoint + 2;
  guestEl.textContent = guestPoint;
}

function addGuest3() {
  guestPoint = guestPoint + 3;
  guestEl.textContent = guestPoint;
}

function subtractGuest3() {
  guestPoint = guestPoint - 3;
  guestFoulEl.textContent = '!!' + 'FOUL' + '!!';
  setTimeout(function () {
    guestFoulEl.textContent = ''; // Remove the 'FOUL' message after 2000 milliseconds
  }, 2000);
  guestEl.textContent = guestPoint;
}

//countdown

let countdownDuration = 30;

// Get the element where you want to display the countdown
let countdownElement = document.getElementById('countdown-el');
let startButton = document.getElementById('start-btn');

// Function to update the countdown display
function updateCountdown() {
  countdownElement.textContent = countdownDuration + ' seconds';
  countdownDuration--;

  if (countdownDuration < 0) {
    clearInterval(interval);
    countdownElement.textContent = 'Time is up!';
  }
}

startButton.addEventListener('click', function () {
  updateCountdown(); // Call this once immediately
  interval = setInterval(updateCountdown, 1000); // Start the interval
});
