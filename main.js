/*
select button add click
click eventlistener
play sound
*/
var button = document.querySelector(".button1")

button.addEventListener("click",function(){
  var sound = new Audio();
  sound.src = "scammer.aac"
  sound.play()
})
