const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
let chancesLeft = 5;

function startGame() {
  while (chancesLeft > 0) {
    let userGuess = parseInt(prompt("1dan 10gacha son yozing: "));

    if (userGuess === randomNumber) {
      console.log("Tabriklayman, siz raqamni topdingiz.");
      return;
    } else {
      chancesLeft--;
      
      console.log(chancesLeft + "ta urinishingiz qoldi");
    }
  }

  console.log("O'yin tugadi, uzur yutqazdingiz, raqam " + randomNumber + " edi");
}

startGame();