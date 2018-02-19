var random_sequence = Array.from({length: 20}, () => Math.floor(Math.random() * 4));
console.log(random_sequence);

var user_presses = [];
var anyButtonPressed = false;

var score = 1;
var isStrict = false;


/* The main game loop */
var index = 0;

function start() {
  isStrict = false;
  game();
}

function strict() {
  if(!isStrict) {
    document.getElementById("strict-btn").style.backgroundColor = "green";
    isStrict = true;
    game();
  } else if(isStrict) {
    document.getElementById("strict-btn").style.backgroundColor = "#FFEB3B";
    isStrict = false;
    game();
  }
}

async function game() {
  while (index < 20) {

      await sleep(3000);
      await playSubSequence(index);
      await getButtonPress();
  }
}

async function getButtonPress() {
  console.log("Awaiting Button Press");
  await sleep(5000+(index*2000)); // multiply this dynamically for more time
  if(anyButtonPressed) {

    await checkUserInput(index);
    console.log("A button has been pressed");
    anyButtonPressed = false;
  }
  else {
    reset();
    let audio = document.getElementById("wrong_sound");
    audio.play();
  }
}

async function checkUserInput() {
  var correctButton = true;
  for(var x = 0; x < index+1; x++) {
    if(user_presses[x] != random_sequence[x]) {

      makeWrongNoise();
      correctButton = false;
      break;
    } else {

    }
  }
  if(correctButton) {

        if(score < 21) {
          score++;
          document.getElementById("display").innerHTML = score;
          user_presses = [];
          index++;
        } else if(score === 20) {
          document.getElementById("message").innerHTML = "Congrats! You won!";
          console.log("You won");
          setTimeout(function() { document.getElementById("message").innerHTML = ""; }, 2000);
          strictReset();
          score = 1;
        } else {
        console.log("Error");
        }

  }
}

async function makeWrongNoise() {
  let audio = document.getElementById("wrong_sound");
  audio.play();
  if(isStrict) {
    strictReset();
  } else if (isStrict === false) {
    reset();

  }
}

async function playSubSequence(index) {
  var subIndex = index;
  var i = 0;
  while(i <= subIndex) { // <
    number_checker(i);
    await sleep(2000);
    console.log(i);
    i++;
  }
}

async function playThroughCompleteSequence() {
  var i = 0;
  while(i < random_sequence.length) {
    number_checker(i);
    await sleep(2000);
    console.log(i);
    i++;
    index = -1;
  }
}

/* Sleep function for sequence playing */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// will reset Game when game has been won by player
function reset() {
  isStrict = false;
  user_presses = [];
  //document.getElementById("display").innerHTML = score;
}

async function strictReset() {
  isStrict = true;
  user_presses = [];
  score = 1;
  document.getElementById("display").innerHTML = score;
  await sleep(1000);
  index = 0;
}


/* sequence check for complete and sub- array and playing the sounds back to the
user*/
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

/* Button click logic */

document.getElementById("start-btn").onclick = () => {
  document.getElementById("display").innerHTML = 1;
  start();
}

document.getElementById("strict-btn").onclick = () => {
  document.getElementById("display").innerHTML = 1;
  strict();
}

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
  anyButtonPressed = true;
}

//else if(target.id === "arc-two") {
document.getElementById("arc-two").onclick = () => {
  var col = document.getElementById("arc-two");
  col.classList.add("arc-two-light");
  let audio = document.getElementById("sound_two");
  user_presses.push(1);
  console.log(user_presses);
  //if(!audio) return;
  //audio.currentTime = 0;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-two-light"); }, 1000);
  anyButtonPressed = true;
}

//else if(target.id === "arc-three") {
document.getElementById("arc-three").onclick = () => {
  var col = document.getElementById("arc-three");
  col.classList.add("arc-three-light");
  let audio = document.getElementById("sound_three");
  user_presses.push(2);
  console.log(user_presses);
  //if(!audio) return;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-three-light"); }, 1000);
  anyButtonPressed = true;
}

//else if(target.id === "arc-four") {
document.getElementById("arc-four").onclick = () => {
  var col = document.getElementById("arc-four");
  col.classList.add("arc-four-light");
  let audio = document.getElementById("sound_four");
  user_presses.push(3);
  console.log(user_presses);
  //if(!audio) return;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-four-light"); }, 1000);
  anyButtonPressed = true;
}
