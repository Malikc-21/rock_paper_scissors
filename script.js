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