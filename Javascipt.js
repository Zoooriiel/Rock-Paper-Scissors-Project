const imageRock = document.querySelector("#imageRock");
const imagePaper = document.querySelector("#imagePaper");
const imageScissors = document.querySelector("#imageScissors");
const buttonPlay = document.querySelector("#playGame");

let choiceDiv = document.querySelector("#choice");
let resultDiv = document.querySelector("#result");
let score = document.querySelector("#score");

let humanChoice = "";
let humanScore = 0;
let computerScore = 0;
let gameDisabled = false;

function disableGame(){
    imageRock.disabled = true;
    imagePaper.disabled = true;
    imageScissors.disabled = true;
    gameDisabled = true;
    buttonPlay.innerText = "Play again"
    choiceDiv.innerText = "";
    resultDiv.innerText = "";
    score.innerText = "";
}

function playAgain(){
    humanScore = 0;
    computerScore = 0;
    resultMessage = "";
    imageRock.disabled = false;
    imagePaper.disabled = false;
    imageScissors.disabled = false;
    buttonPlay.innerHTML = "Select a choice"
    gameDisabled = false;
}


imageRock.addEventListener("click", () => {
    if(!gameDisabled){
    buttonPlay.innerText = "Lock in choice"
  choiceDiv.innerText = "You selected rock!";
  humanChoice = "rock";
    }
});

imagePaper.addEventListener("click", () => {
    if(!gameDisabled){
      buttonPlay.innerText = "Lock in choice"
  choiceDiv.innerText = "You selected paper!";
  humanChoice = "paper";
    }
});

imageScissors.addEventListener("click", () => {
    if(!gameDisabled){
      buttonPlay.innerText = "Lock in choice"
  choiceDiv.innerText = "You selected scissors!";
  humanChoice = "scissors";
    }
});


    function playRound(humanChoice) {

        let compChoices = ["rock", "paper", "scissors"];
        let randomNum = Math.floor(Math.random() * 3);
        let computerChoice = compChoices[randomNum]
    
        let resultMessage = "";
    
    
        if(humanChoice === computerChoice){
            resultMessage = `It's a tie!`
        }
        else{
            switch (humanChoice){
                case "rock":
                    resultMessage = (computerChoice === "paper") ? `You lose!` : `Rock beats scissors!`
                    humanScore += (computerChoice === "scissors") ? 1 : 0;
                    computerScore += (computerChoice === "paper") ? 1 : 0;
                    break;
                case "paper":
                    resultMessage = (computerChoice === "scissors") ? `You lose!` : `Paper beats rock!`
                    humanScore += (computerChoice === "rock") ? 1 : 0;
                    computerScore += (computerChoice === "scissors") ? 1 : 0;
                    break;
                case "scissors":
                    resultMessage = (computerChoice === "rock") ? `You lose!` : `Scissors beats paper!`
                    humanScore += (computerChoice === "paper") ? 1 : 0;
                    computerScore += (computerChoice === "rock") ? 1 : 0;
            }
        }
        resultDiv.innerText = `Result: ${resultMessage}`;
        score.innerText = `Human: ${humanScore} Computer: ${computerScore}`;

        if (humanScore === 5){
            score.innerText = `Human have won!`
            disableGame();
        }
        else if(computerScore === 5){
            score.innerText = `Computer have won! MUAHAHAHA`
            disableGame()
        }
    
      }

      

buttonPlay.addEventListener("click", () => {

    if (gameDisabled){
        playAgain();
    }
    else if(humanChoice){
        playRound(humanChoice)
        humanChoice = "";
    }
    else{
        buttonPlay.innerText = `Select a choice!!!`
    }

});

