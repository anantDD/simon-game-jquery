const sounds = [
  'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
]

let gameState = 'ON';

$(document).ready(function () {
  $('.restart').click(gameStart);
  $('#power').click(gameStart);
  $('#power').click(() => {
    $('.flip').toggleClass('switch-on');
  });
  $('.mode .round-btn').click(function(){ 
    $(this).toggleClass('pressed-on'); 
    $('.led').toggleClass('led-on');
  });
  $('.start .round-btn').click(function(){ 
    $(this).toggleClass('pressed-on'); 
  });
});

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