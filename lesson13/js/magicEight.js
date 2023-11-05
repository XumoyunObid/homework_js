let userName = prompt("Hello! What's your name?");
let userQuestion = prompt(userName + ", What's yout question?");
let circle = document.querySelector(".circle");

let answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definetily",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now ",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it ",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

function magicball() {
    let randomNumber = Math.floor(Math.random() * (answers.length));
    let eightBall = answers[randomNumber];
    let answer = document.querySelector(".textHere");
    answer.innerHTML = eightBall;
  }

  magicball();

circle.addEventListener("click", function magicball() {
  let randomNumber = Math.floor(Math.random() * (answers.length));
  let eightBall = answers[randomNumber];
  let answer = document.querySelector(".textHere");
  answer.innerHTML = eightBall;
});
 