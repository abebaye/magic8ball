const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("#para");
const divCircle = (document.querySelector("#circle").style.animation =
  "spin1 1s linear infinite");

// JavaScript animations are done by programming gradual changes in an element's style.
// The changes are called by a timer. When the timer interval is small, the animation looks continuous.

// create a random number function

function getRandomNumber(max_number) {
  return Math.floor(Math.random() * max_number);
}

// Math.random() returns a random number between 0 (included) and 1 (excluded):
// Math.floor() rounds a number DOWN to the nearest integer

//add event listner to the button

button.addEventListener("click", function () {
  let randomNumber = getRandomNumber(7);

  let answer = "";

  switch (randomNumber) {
    case 0:
      answer = "Ask again.";
      break;
    case 1:
      answer = "Most likely";
      break;
    case 2:
      answer = "Cannot predict now";
      break;
    case 3:
      answer = "Yes";
      break;
    case 4:
      answer = "Ask again later";
      break;
    case 5:
      answer = "Signs point to yes";
      break;
    case 6:
      answer = "Yes - definitely";
      break;
    case 7:
      answer = "Better not tell you now";
      break;
  }

  p.innerHTML = answer;

  setTimeout(function () {
    location.reload();
  }, 5000);

  divCircle = document.querySelector("#circle").style.animation =
    "idle 1s linear infinite";
  // The idle time is the time that the user doesn’t interact with a web-page.
});
