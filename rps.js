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
    if (choice !== "rock" || choice !=="paper" || choice!=="scissors"){
        return undefined
    }
    return choice
}


console.log("Let's play!")
console.log(rps())
console.log(getHumanChoice())