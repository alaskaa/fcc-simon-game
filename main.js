var random_sequence = Array.from({length: 20}, () => Math.floor(Math.random() * 4));
console.log(random_sequence);

var user_presses = [];
var anyButtonpressed = false;

var score = 0;
var isStrict = false;


/* The main game loop */
var index = 1;
game();

async function game() {
  while (index < 20) {
    if (index === 1) {
      playSubSequence(index);
      //getButtonPress();
      //checkUserInput(index);
      index++;
      //playSubSequence();
      console.log("im in the if");
    } else {
      await getButtonPress();
      //console.log("Hello");
    }
  }
}

async function getButtonPress() {
  console.log("Awaiting Button Press");
  await sleep(5000); // this is a timeout so when 10000 ms pass, then it get's reset
  //await getTheUserInputClicks();
  if(anyButtonpressed) {
    checkUserInput(index);
    playSubSequence(index);
    console.log("A button has been pressed");
    index++;
    anyButtonpressed = false;
  }
  else {
    reset();
    console.log("ive been reset")
  }
}

function checkUserInput(indexNum) {
  var number = user_presses[indexNum];
  if(number === random_sequence[indexNum]) {
    if(score < 20) {
      score++;
      console.log("Score is: " + score);
    } else if(score === 20) {
      console.log("You won");
      reset();
      score = 0;
    }
  } else {
    //let audio = document.getElementById("wrong_sound");
    //audio.play();
    if(isStrict) {
      //go back to the start;
      reset();
    } else if (isStrict === false) {
      playSubSequence();
    }
  }
}

async function playSubSequence(index) {
  var subIndex = index;
  var i = 0;
  while(i < subIndex) {
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

async function userInputClicks() {

  await getTheUserInputClicks();
}

/* Click handler logic for sounds and light for user input and clicks */
async function getTheUserInputClicks() {

  //while((btn_0_pressed = false) && (btn_1_pressed = false) && (btn_2_pressed = false) && (btn_3_pressed = false)) {
  //  return false;
  //}
  //(btn_0_pressed || btn_1_pressed || btn_2_pressed || btn_3_pressed) {
  //else {
  //  return true;
  // }
  //}

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
  anyButtonpressed = true;
}

//else if(target.id === "arc-two") {
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
  anyButtonpressed = true;
}

//else if(target.id === "arc-three") {
document.getElementById("arc-three").onclick = () => {
  var col = document.getElementById("arc-three");
  col.classList.add("arc-three-light");
  let audio = document.getElementById("sound_three");
  user_presses.push(2);
  //if(!audio) return;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-three-light"); }, 1000);
  anyButtonpressed = true;
}

//else if(target.id === "arc-four") {
document.getElementById("arc-four").onclick = () => {
  var col = document.getElementById("arc-four");
  col.classList.add("arc-four-light");
  let audio = document.getElementById("sound_four");
  user_presses.push(3);
  //if(!audio) return;
  audio.play();
  setTimeout(function() {
    col.classList.remove("arc-four-light"); }, 1000);
  anyButtonpressed = true;
}
