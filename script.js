function getComputerChoice(){ 

    let choice = Math.floor(Math.random() * 3) + 1;
    let choice2;

    if (choice === 1) {
       choice2 = "rock"
    }
    else if (choice === 2) {
        choice2 = "paper"
     }
     else if (choice === 3) {
        choice2 = "scissors"
     }
    return choice2;
}

function playround(playerPick, computerPick){

    

    if (playerPick.toLowerCase() === computerPick) {
        
        return tie;


    }
    else if 
        (playerPick.toLowerCase() === "rock" && computerPick === "paper" || 
        playerPick.toLowerCase() === "scissors" && computerPick === "rock" || 
        playerPick.toLowerCase() === "paper" && computerPick === "scissors") {

        ++computerScore
        return lose;
        
        
    }
    else {
        
        ++userScore;
        return win;
    }

    
    
}

let userScore = 0;
let computerScore = 0;
let win;
let lose;
let tie;
let rounds = 0;
let gameover = false
let result;
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    playerPick = button.id;
    computerPick = getComputerChoice()
    rounds = ++rounds;
    
    (playround(playerPick, computerPick))
    
    
    const container = document.querySelector('#container')

    const yourScore = document.createElement('div')
    yourScore.textContent = "Your score is " + userScore + " - you chose " + playerPick
    container.appendChild(yourScore)

    
    const compScore = document.createElement('div')
    compScore.textContent = "Computer score is " + computerScore  + " - they chose " + computerPick
    container.appendChild(compScore)

    const round = document.createElement('div')
    round.textContent = "round " + rounds 
    container.appendChild(round)

    if (rounds === 5) {
        gameover = true

    }
    
    if (gameover == true) {

    
        if (computerScore < userScore) {

            gameover = false
            rounds = 0
            userScore = 0
            computerScore = 0
            result = 'You win!'

            const winner = document.createElement('h1')
            winner.textContent = result
            container.appendChild(winner)

            }
            else if (computerScore > userScore) {
            
            gameover = false

            rounds = 0
            rounds = 0
            userScore = 0
            computerScore = 0

            result = 'the computer won'

            const winner = document.createElement('h1')
            winner.textContent = result
            container.appendChild(winner)

            }
            else if (computerScore === userScore) {
            
            gameover = false

            rounds = 0
            rounds = 0
            userScore = 0
            computerScore = 0

            result = 'It is a tie'

            const winner = document.createElement('h1')
            winner.textContent = result
            container.appendChild(winner)

            } 
    }
    });
});