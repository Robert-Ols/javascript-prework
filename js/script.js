function playGame(playerInput) { clearMessages();
  function getMoveName(moveName) {
    if (moveName == 1) {
      return "kamień";
    } else if (moveName == 2) {
      return "papier";
    } else if (moveName == 3) {
      return "nożyce";
    } else {
      printMessage("Nie znam ruchu " + moveName + ".");
      return "nieznany ruch";
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage("Mój ruch to: " + computerMove);

  /*let playerInput = prompt(
    "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  );*/

  console.log("Gracz wpisał: " + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage("Twój ruch to: " + playerMove);

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

    if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "kamień" && argPlayerMove == "papier") {
      printMessage("Ty wygrywasz!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
      printMessage("Ja wygrywam!");
    } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
      printMessage("Ja wygrywam!");
    } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
      printMessage("Ja wygrywam!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "nieznany ruch") {
      printMessage("Ja wygrywam!");
    } else if (argComputerMove == "kamień" && argPlayerMove == "nieznany ruch") {
      printMessage("Ja wygrywam!");
    } else if (argComputerMove == "papier" && argPlayerMove == "nieznany ruch") {
      printMessage("Ja wygrywam!");
    } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
      printMessage("Remis!");
    } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
      printMessage("Remis!");
    } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
      printMessage("Remis!");
    }
  }
  displayResult(computerMove, playerMove);
}

// listeners for buttons
function buttonKamień() {
  playGame("1");
}
let playRock = document.getElementById("play-rock");
playRock.addEventListener("click", buttonKamień);

function buttonPaier() {
  playGame("2");
}
let playPaper = document.getElementById("play-paper");
playPaper.addEventListener("click", buttonPaier);

function buttonNożyce() {
  playGame("3");
}
let playScissors = document.getElementById("play-scissors");
playScissors.addEventListener("click", buttonNożyce);