const sounds = [
  'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
]

let gameState = 'OFF';

$(document).ready(function(){
  $('.restart').click(gameStart);
  $('#power').click('gameStart');
});

function gameStart(){
  
}
if(gameState=='ON'){
  $('.btn--red').click(()=>{playSound(sounds[0])})

}

function playSound(source){
  var flush = new Audio(source);
  flush.play();
  console.log('played')
}