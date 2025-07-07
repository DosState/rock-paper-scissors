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
    humanRps = humanRps.toLowerCase();
    computerRps = computerRps.toLowerCase();

    const parent = document.querySelector(".results");
    const div = document.createElement("div");
    div.setAttribute("style", "border: 1px solid grey; margin: 0 5 0 5;");
    
    // Function to convert choice to emoji
    function choiceToEmoji(choice) {
        if (choice === "rock") return "🪨";
        if (choice === "paper") return "🧻";
        if (choice === "scissors") return "🔪";
        return choice
    }
    
    if (humanRps === computerRps){
        div.textContent = `It's a draw you chose ${choiceToEmoji(humanRps)} and the computer chose ${choiceToEmoji(computerRps)}`;
        parent.appendChild(div);
        return "draw"
    }
    if (humanRps === "rock" && computerRps==="scissors" || humanRps === "paper" && computerRps==="rock" || humanRps === "scissors" && computerRps==="paper"){
        div.textContent = `You won! ${choiceToEmoji(humanRps)} beats ${choiceToEmoji(computerRps)}`;
        parent.appendChild(div);
        return "win"
    }
    else{
        div.textContent = `You lose! ${choiceToEmoji(computerRps)} beats ${choiceToEmoji(humanRps)}`;
        parent.appendChild(div);
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