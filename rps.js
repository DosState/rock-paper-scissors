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
        console.log(`It's a draw you chose ${humanRps} and the computer chose ${computerRps}`)
        return "draw"
    }
    if (humanRps === "rock" && computerRps==="scissors" || humanRps === "paper" && computerRps==="rock" || humanRps === "scissors" && computerRps==="paper"){
        console.log(`You won! ${humanRps} beats ${computerRps}`)
        return "win"
    }
    else{
        console.log(`You lose! ${computerRps} beats ${humanRps}`)
        return "lost"
    }
}

function playGame(){
    console.log("Let's play!")
    let computerScore = 0;
    let humanScore = 0;

    let round = "";
    
    for(let i=0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = rps();
        round = playRound(humanSelection, computerSelection);
        if(round === "win"){
            humanScore++;
        }
        else if(round === "lost"){
            computerScore++;
        }
    }

    if(humanScore>computerScore){
        console.log(`YOU WON🎆 Human Score: ${humanScore} vs Computer Score: ${computerScore}`)
    }
    else if (humanScore===computerScore){
        console.log(`IT'S A DRAW😑 Human Score: ${humanScore} vs Computer Score: ${computerScore}`)
    }
    else{
        console.log(`YOU LOST💀 Human Score: ${humanScore} vs Computer Score: ${computerScore}`)
    }
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", (e)=>{
        let target = e.target;
        console.log(target.className);
        switch(target.className){
            case "rock":
                playRound("rock",rps());
                break;
            case "paper":
                playRound("paper",rps());
                break;
            case "scissors":
                playRound("scissors",rps());
                break;
        }
    })
})