function rps(){
    let choice = Math.random()*3;
    if (choice>=0 && choice<1){
        return "rock"
    }
    else if (choice>=1 && choice<2){
        return "paper"
    }
    else if (choice>=2 && choice<=3){
        return "scissors"
    }
    else{
        return "I don't know"
    }
}

function getHumanChoice(){
    let choice = prompt("rock paper or scissors")
    return choice
}

function playRound(humanRps, computerRps){
    humanRps = humanRps.toLowerCase()
    computerRps = computerRps.toLowerCase()
    if (humanRps === computerRps){
        return `It's a draw you chose ${humanRps} and the computer chose ${computerRps}`
    }
    if (humanRps === "rock" && computerRps==="scissors" || humnanRps === "paper" && computerRps==="rock" || humnanRps === "scissors" && computerRps==="paper"){
        return `You won! ${humanRps} beats ${computerRps}`
    }
    else{
        return `You lose! ${computerRps} beats ${humanRps}`
    }
}

console.log("Let's play!")
let computerScore = 0;
let humanScore = 0;

const humanSelection = getHumanChoice()
const computerSelection = rps()

console.log(playRound(humanSelection, computerSelection))
