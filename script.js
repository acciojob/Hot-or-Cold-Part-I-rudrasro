const btn = document.getElementById("btn");
const num = document.getElementById("num");

btn.addEventListener("click", function() {
  const randomNumber = Math.floor(Math.random() * 41) - 20;
  num.textContent = randomNumber;
});

//get the input element
const input = document.getElementById("guess");
//get the respond element
const respond = document.getElementById("respond");

let correctNumber = Math.floor(Math.random() * 100);

input.addEventListener("change", function() {
  const guess = parseInt(input.value);
  if (guess === correctNumber) {
    respond.textContent = "Correct!";
  } else if (Math.abs(guess - correctNumber) <= 10) {
    respond.textContent = "Hot";
  } else {
    respond.textContent = "Cold";
  }
});
