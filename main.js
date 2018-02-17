var random_sequence = Array.from({length: 20}, () => Math.floor(Math.random() * 4));
console.log(random_sequence);

async function playThroughCompleteSequence() {
  var i = 0;
  while(i < random_sequence.length) {
    number_checker(i);
    await sleep(2000);
    console.log(i);
    i++;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function checkUserInput(number, indexNum) {
  if(number === random_sequence[indexNum]) {
    go the next one;
  }// how do I know where I am
  else {
    //let audio = document.getElementById("wrong_sound");
    //audio.play();
  }
}

//playThroughCompleteSequence();

// try again mode
function start() {

}

// strict mode
function strict() {

}


function number_checker(num) {
if(random_sequence[num] === 0) {
  var col = document.getElementById("arc-one");
  col.classList.add("arc-one-light");
  let audio = document.getElementById("sound_one");
  audio.play();
  setTimeout(function() {
  col.classList.remove("arc-one-light"); }, 1000);

} else if(random_sequence[num] === 1) {
  var col = document.getElementById("arc-two");
  col.classList.add("arc-two-light");
  let audio = document.getElementById("sound_two");
  audio.play();
  setTimeout(function() {
  col.classList.remove("arc-two-light"); }, 1000);

} else if(random_sequence[num] === 2) {
  var col = document.getElementById("arc-three");
  col.classList.add("arc-three-light");
  let audio = document.getElementById("sound_three");
  audio.play();
  setTimeout(function() {
  col.classList.remove("arc-three-light"); }, 1000);

} else if(random_sequence[num] === 3) {
  var col = document.getElementById("arc-four");
  col.classList.add("arc-four-light");
  let audio = document.getElementById("sound_four");
  audio.play();
  setTimeout(function() {
  col.classList.remove("arc-four-light"); }, 1000);
}
}

var user_presses = [];

document.getElementById("arc-one").onclick = () => {
  var col = document.getElementById("arc-one");
  col.classList.add("arc-one-light");
  let audio = document.getElementById("sound_one");
  user_presses.push(0);
  console.log(user_presses);
  //if(!audio) return;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-one-light"); }, 1000);
}

document.getElementById("arc-two").onclick = () => {
  var col = document.getElementById("arc-two");
  col.classList.add("arc-two-light");
  let audio = document.getElementById("sound_two");
  user_presses.push(1);
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
  user_presses.push(2);
  //if(!audio) return;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-three-light"); }, 1000);
}

document.getElementById("arc-four").onclick = () => {
  var col = document.getElementById("arc-four");
  col.classList.add("arc-four-light");
  let audio = document.getElementById("sound_four");
  user_presses.push(3);
  //if(!audio) return;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-four-light"); }, 1000);
}
