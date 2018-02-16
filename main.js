document.getElementById("arc-one").onclick = () => {
  var col = document.getElementById("arc-one");
  col.classList.add("arc-one-light");
  setTimeout(function() {
    col.classList.remove("arc-one-light"); }, 1000);
}

document.getElementById("arc-two").onclick = () => {
  var col = document.getElementById("arc-two");
  col.classList.add("arc-two-light");
  setTimeout(function() {
    col.classList.remove("arc-two-light"); }, 1000);
}

document.getElementById("arc-three").onclick = () => {
  var col = document.getElementById("arc-three");
  col.classList.add("arc-three-light");
  setTimeout(function() {
    col.classList.remove("arc-three-light"); }, 1000);
}

document.getElementById("arc-four").onclick = () => {
  var col = document.getElementById("arc-four");
  col.classList.add("arc-four-light");
  setTimeout(function() {
    col.classList.remove("arc-four-light"); }, 1000);
}
