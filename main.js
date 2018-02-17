var random_sequence = Array.from({length: 20}, () => Math.floor(Math.random() * 4));
console.log(random_sequence);

var user_presses = [];

var score = 0;
var isStrict = false;


/* The main game loop */
var index = 0;
playSubSequence(index);
while (index < 20) {
  await a button press;
  checkUserInput(index);
  index++;
  playSubSequence();
}

function checkUserInput(indexNum) {
  var number = user_presses[indexNum];
  if(number === random_sequence[indexNum]) {
    if(score < 20) {
      score++;
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
      repeat the sequence up until then;
    }
  }
}

async function playSubSequence(index) {

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

/* Click handler logic for sounds and light for user input and clicks */
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
