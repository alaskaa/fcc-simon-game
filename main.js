var random_sequence = Array.from({length: 20}, () => Math.floor(Math.random() * 4));
console.log(random_sequence);

var user_presses = [];
var anyButtonPressed = false;

var score = 1;
var isStrict = false;


/* The main game loop */
var index = -1;
game();

async function game() {
  while (index < 20) {
    if (index === -1) {
      await sleep(2000);

      //getButtonPress();
      //checkUserInput(index);
      index++;
      playSubSequence(index);
      //playSubSequence();
      console.log("Index is currently: " + index);
    } else {
      await getButtonPress();
      //console.log("Hello");
    }
  }
}

async function getButtonPress() {
  console.log("Awaiting Button Press");
  await sleep(5000+(index*2000)); // multiply this dynamically for more time
  if(anyButtonPressed) {
    console.log("Index is currently: " + index);
    await sleep(2000);
    await checkUserInput(index);
    playSubSequence(index+1);
    console.log("A button has been pressed");
    index++;
    anyButtonPressed = false;
  }
  else {
    reset();
    console.log("ive been reset")
  }
}

async function checkUserInput(indexNum) {
  console.log("The indexNum is " + indexNum);
  var number;
  number = user_presses[indexNum];
  console.log("The colour number is: " + number);
  console.log("Number assigned is " + number);
  for(var x = 0; x < user_presses.length; x++) {
    if(user_presses[x] != random_sequence[x]) {
      await sleep(1000);
      makeWrongNoise();
      console.log("hi");

    number = x;
    console.log("wahoo");
  // implement here that every index needs checked
  //if(number === random_sequence[indexNum]) {
    if(score < 21) {
      console.log("I'm incrementing");
      score++;
      console.log("Score is: " + score);
      document.getElementById("display").innerHTML = score;
      user_presses = [];
    } else if(score === 20) {
      console.log("You won");
      reset();
      score = 0;
    } else {
      console.log("Error");
    }
    }
  }
  //} else {

  //}
}

async function makeWrongNoise() {
  //await sleep(1000);
  let audio = document.getElementById("wrong_sound");
  audio.play();
  if(isStrict) {
    //go back to the start;
    reset();
  } else if (isStrict === false) {
    console.log("That's wrong");
    await sleep(1000);
    score--;
    console.log("That's the index seq played: " + (index-1));
    playSubSequence(index-1);
    //score--;
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
  score = 1;
  document.getElementById("display").innerHTML = score;
}

//playThroughCompleteSequence();

// try again mode
function start() {
   //isStrict = false;
}

// strict mode
function strict() {
  isStrict = true;
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
