const btn = document.getElementById("btn");
const input = document.getElementById("guess");
const submitBtn = document.getElementById("submit-btn");
const respond = document.getElementById("respond");
let correctNumber = Math.floor(Math.random() * 41) - 20;

btn.addEventListener("click", function() {
  input.removeAttribute("disabled");
  submitBtn.removeAttribute("disabled");
});

submitBtn.addEventListener("click", function() {
    let userGuess = parseInt(input.value);
    let tries = 0;
    const maxTries = 5;
    while (tries < maxTries) {
        if(userGuess === correctNumber){
            respond.textContent = "Correct!";
            break;
        }
        respond.textContent = checkGuess(userGuess, correctNumber);
        userGuess = parseInt(input.value);
        tries++;
    }
    if (tries === maxTries) {
        respond.textContent = "You reached the maximum number of tries, the correct number was " + correctNumber;
    }
});

function checkGuess(guess, correctNumber) {
  const difference = Math.abs(guess - correctNumber);
  if (difference <= 5) {
    document.body.style.background = "red";
    return "Hot";
  } else if (difference <= 10) {
    document.body.style.background = "yellow";
    return "Warm";
  } else {
    document.body.style.background = "blue";
    return "Cold";
  }
}
