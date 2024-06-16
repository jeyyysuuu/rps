function getComputerChoice(){
    const choices = ['rock','paper','scissors']
    const random = Math.floor(Math.random() * choices.length)
    return choices[random];
}

function getHumanChoice(){
    let input = prompt('Choose: ').toLowerCase();
    while (input !== 'rock' && input !== 'paper' && input !== 'scissors'){
        input = prompt('Invalid choice, please choose from rock, paper and scissors: ')
    }
    return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    console.log(`Computer: ${computerChoice}`);
    console.log(`Human: ${humanChoice}`);
    if (computerChoice == 'rock' && humanChoice == 'paper' ||
        computerChoice == 'paper' && humanChoice == 'scissors' ||
        computerChoice == 'scissors' && humanChoice == 'rock' ){
            console.log('You Win!')
            humanScore++
        } else if (computerChoice === humanChoice){
            console.log('Tie!')
        } else {
            console.log('You Lose!')
            computerScore++
        }
}

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);

console.log(`Human Score: ${humanScore}`)
console.log(`Computer Score: ${computerScore}`)

function playGame(){
    while(humanScore < 5 && computerScore < 5){
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        
        playRound(computerSelection, humanSelection);
        
        console.log(`Human Score: ${humanScore}`)
        console.log(`Computer Score: ${computerScore}`)  
    }


    if (humanScore === 5){
        console.log('Congrats!')
    } else if (computerScore === 5){
        console.log('bobo')
    }
}

playGame();

