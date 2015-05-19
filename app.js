var button = document.getElementsByClassName("fa");
var audio = document.getElementsByTagName("audio");
var section = document.getElementsByTagName("section");
var header = document.getElementById("header");
var span = document.getElementsByTagName("span");

var stopMusic = function(){
  for (i=0; i< audio.length; i++) {
    audio[i].pause();
    button[i].className = "fa fa-play";
    header.innerHTML = "Select a song!";
  }
};

button[0].addEventListener("click", function(){
  if (button[0].className === "fa fa-play") {
    stopMusic();
    audio[0].play();
    button[0].className = "fa fa-stop";
    header.innerHTML = "<em>" + "Now Playing: " + "</em>" + span[0].innerHTML;
  }
  else {
    stopMusic();
  }
});

button[1].addEventListener("click", function(){
  if (button[1].className === "fa fa-play") {
    stopMusic();
    audio[1].play();
    button[1].className = "fa fa-stop";
    header.innerHTML = "<em>" + "Now Playing: " + "</em>" + span[1].innerHTML;
  }
  else {
    stopMusic();
  }
});

button[2].addEventListener("click", function(){
  if (button[2].className === "fa fa-play") {
    stopMusic();
    audio[2].play();
    button[2].className = "fa fa-stop";
    header.innerHTML = "<em>" + "Now Playing: " + "</em>" + span[2].innerHTML;
  }
  else {
    stopMusic();
  }
});

button[3].addEventListener("click", function(){
  if (button[3].className === "fa fa-play") {
    stopMusic();
    audio[3].play();
    button[3].className = "fa fa-stop";
    header.innerHTML = "<em>" + "Now Playing: " + "</em>" + span[3].innerHTML;
  }
  else {
    stopMusic();
  }
});
