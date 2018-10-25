const sounds = [
  'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
]

let gameState = false;
let strictMode = false;
let buttonPressArray = [];

$(document).ready(function () {
  $('#power').click(toggleGameState);
  $('.start').on('click','.active', startGame);
  $('.mode').on('click', '.active', strictModeToggle);
});

function startGame(){
  $(this).toggleClass('pressed-on');
  // sstart the game
  //initiate or reinitiate the various arrays
  buttonPressArray = [];
  buttonPressArray.push(getNewColor());
  //place an initial value.
  //call function that plays the game for us
}

function playGame(arr){
  
}

function strictModeToggle() {
  $(this).toggleClass('pressed-on');
  $('.led').toggleClass('led-on');
  strictMode = !strictMode;
}

function toggleGameState() {
  $('.flip').toggleClass('switch-on');
  gameState = !gameState;
  if (gameState) {
    $('.displayCount').css('color', 'red');
    $('.start .round-btn, .mode .round-btn').addClass('active');
  } else {
    $('.displayCount').css('color', 'black');
    $('.start .round-btn, .mode .round-btn').removeClass('active pressed-on');
    $('.led').removeClass('led-on');
  }
}
function gameStart() {
  if (gameState == 'ON') {
    $('.btn--red').click(() => { playSound(sounds[0]) })

  }
}

function playSound(source) {
  var flush = new Audio(source);
  flush.play();
  console.log('played')
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 4) + 1;
}

function getNewColor() {
  let element = generateRandomNumber();
  let mapToColor = '';
  switch (element) {
    case 1: return 'red';
    case 2: return 'green';
    case 3: return 'yellow';
    case 4: return 'blue';
  }
}

function addNewButtonPress(buttonPressArray) {
  let buttonColor = getNewColor();
  buttonPressArray.push(buttonColor);
}

function runThroughButtons(buttonPressArray) {
  let buttonClass = 'btn--';
  let t = setInterval(() => {

  }, 1000)
}

function recur(i, arr) {
  if (i >= arr.length) {
    clearInterval(t);
  }
}
