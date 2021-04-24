// Your code here
let dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
});
function moveDodgerUp() {
  let leftNumbers = dodger.style.up.replace("px", "");
  let up = parseInt(leftNumbers, 10);
 
  if (up > 0) {
    dodger.style.up = `${up - 1}px`;
  }
}

