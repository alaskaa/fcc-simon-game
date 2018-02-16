document.getElementById("arc-one").onclick = () => {
  var col = document.getElementById("arc-one");
  col.classList.add("arc-one-light");
  let audio = document.getElementById("sound_one");
  //if(!audio) return;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-one-light"); }, 1000);
}

document.getElementById("arc-two").onclick = () => {
  var col = document.getElementById("arc-two");
  col.classList.add("arc-two-light");
  let audio = document.getElementById("sound_two");
  //if(!audio) return;
  //audio.currentTime = 0;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-two-light"); }, 1000);
}

document.getElementById("arc-three").onclick = () => {
  var col = document.getElementById("arc-three");
  col.classList.add("arc-three-light");
  let audio = document.getElementById("sound_three");
  //if(!audio) return;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-three-light"); }, 1000);
}

document.getElementById("arc-four").onclick = () => {
  var col = document.getElementById("arc-four");
  col.classList.add("arc-four-light");
  let audio = document.getElementById("sound_four");
  //if(!audio) return;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-four-light"); }, 1000);
}
