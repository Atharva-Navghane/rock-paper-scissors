console.log("Hello Console");

function getComputerChoice()
{
    let choice = Math.floor((Math.random()*10)%4);
    if(choice ==0 )
        choice ++;
    switch(choice)
    {
        case 1:
            ch = "Rock";
            break;
        case 2:
            ch = "Paper";
            break;
        case 3:
            ch = "Scissors";
            break;
    }
    return ch;
}

const playerSelection = prompt("Choose between Rock , Paper or Scissors !");
const computerSelection = getComputerChoice();
const cho = playerSelection.charAt(0).toUpperCase();
console.log(cho);
console.log(computerSelection.charAt(0));

function playRound(cho , computerSelection)
{
    if(cho=='R')
    {
        if(computerSelection.charAt(0)=='R')
            return "It's a Draw, you both chose Rock!";
        else if(computerSelection.charAt(0)=='P')
            return "You Loose!, Paper beats Rock!";
        else
            return "You Win! Rock beats Scissors!";
    }
    else if(cho=='P')
    {
        if(computerSelection.charAt(0)=='P')
            return "It's a Draw, you both chose Paper!";
        else if(computerSelection.charAt(0)=='R')
            return "You Win!, Paper beats Rock!";
        else
            return "You Loose! Scissors beats Paper!";
    }
    else
    {
        if(computerSelection.charAt(0)=='S')
            return "It's a Draw, you both chose Scissors!";
        else if(computerSelection.charAt(0)=='R')
            return "You Loose!, Rock beats Scissors!";
        else
            return "You Win! Scissors beats Paper!";
    }
}
console.log(playRound(cho,computerSelection));