(function () {
  let pScore = 0;
  let cScore = 0;
  let pHighScore = [];
  let cHighScore = [];
  let coins = [];

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const sidebarLeft = document.querySelector(".sidebar_left");
    const sidebarRight = document.querySelector(".sidebar_right");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      sidebarLeft.classList.add("fadeIn");
      sidebarRight.classList.add("fadeIn");
    });
  };
  const playMatch = () => {
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    const playBtn = document.getElementById("play_btn");

    hands.forEach((hand) => {
    hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

      const computerOptions = ["rock", "paper", "scissors"];
      let playerChoice ="";
      
      document.getElementById("rock").addEventListener("click", function () {
          playerChoice = "rock";
        });
      document.getElementById("paper").addEventListener("click", function () {
          playerChoice = "paper";
        });
      document.getElementById("scissors").addEventListener("click", function () {
          playerChoice = "scissors";
        });

    playBtn.addEventListener("click", () => {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() => {
          compareHands(playerChoice, computerChoice);
          playerHand.src = `./assets/${playerChoice}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      
    });

    function updateScore() {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
      const winner = document.querySelector(".winner");
      switch (playerChoice) {
        case "rock":
          switch (computerChoice) {
            case "scissors":
              winner.textContent = "Player Wins";
              pScore++;
              updateScore();
              break;
            case "paper":
              winner.textContent = "Computer Wins";
              cScore++;
              updateScore();
              break;
            case "rock":
              winner.textContent = "It is a tie";
              break;
          }
          break;
        case "paper":
          switch (computerChoice) {
            case "scissors":
              winner.textContent = "Computer Wins";
              cScore++;
              updateScore();
              break;
            case "rock":
              winner.textContent = "Player Wins";
              pScore++;
              updateScore();
              break;
            case "paper":
              winner.textContent = "It is a tie";
              break;
          }
          break;
        case "scissors":
          switch (computerChoice) {
            case "rock":
              winner.textContent = "Computer Wins";
              cScore++;
              updateScore();
              break;
            case "paper":
              winner.textContent = "Player Wins";
              pScore++;
              updateScore();
              break;
            case "scissors":
              winner.textContent = "It is a tie";
              break;
          }
          break;
          default:
            winner.textContent = "You Have not choosen any of the options";
          }
    };
  };

  startGame();
  playMatch();
})();