
var sound1 = document.getElementById("sound1");
var sound2 = document.getElementById("sound2");
var sound3 = document.getElementById("sound3");
var sound4 = document.getElementById("sound4");

var changeButtons = function() {
  event.target.classList.remove("fa-play");
  event.target.classList.add("fa-stop");
}

var changeButtonsBack = function() {
  event.target.classList.remove("fa-stop");
  event.target.classList.add("fa-play");
}

var changeHeader = function() {
  header.classList.remove("Now Playing: Favorite Food by Tokyo Police Club");
  header.classList.add("Select a song!");
}

var changeHeaderBack = function() {
    header.classList.remove("Select a song!");
    header.classList.add("Now Playing: Favorite Food by Tokyo Police Club");
  }

}
// ------------------- Button 1 ------------------ //

button1.addEventListener('click', function(){
  if (sound1.paused) {
    sound1.play();
    changeButtons();
    changeHeader();
  }

  else {
    sound1.pause();
    changeButtonsBack();
    changeHeaderBack();
  }
});

// ------------------- Button 2 ------------------ //
button2.addEventListener('click',function(){
  if (sound2.paused) {
    sound2.play();
    changeButtons();
  }

  else {
    sound2.pause();
    changeButtonsBack();
  }
});

// ------------------- Button 3 ------------------ //
button3.addEventListener('click',function(){
  if (sound3.paused) {
    sound3.play();
    changeButtons();
  }

  else {
    sound3.pause();
    changeButtonsBack();
  }
});

// ------------------- Button 4 ------------------ //
button4.addEventListener('click',function(){
  if (sound4.paused) {
    sound4.play();
    changeButtons();
  }

  else {
    sound4.pause();
    changeButtonsBack();
  }
});
