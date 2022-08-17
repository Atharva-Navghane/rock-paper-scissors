console.log("Let's play 5 rounds of rock paper scissors and see who gets the maximum wins!");

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

let playerSelection;
let computerSelection;
let cho;

let userctr = 0;
let compctr =0;

function playRound(cho , computerSelection)
{
    if(cho=='R')
    {
        if(computerSelection.charAt(0)=='R')
            return "It's a Draw, you both chose Rock!";
        else if(computerSelection.charAt(0)=='P')
            {compctr++;
            return "You Loose!, Paper beats Rock!";}
        else
            {userctr++;
            return "You Win! Rock beats Scissors!";}
    }
    else if(cho=='P')
    {
        if(computerSelection.charAt(0)=='P')
            return "It's a Draw, you both chose Paper!";
        else if(computerSelection.charAt(0)=='R')
            {userctr++;
            return "You Win!, Paper beats Rock!";}
        else
            {compctr++;
            return "You Loose! Scissors beats Paper!";}
    }
    else
    {
        if(computerSelection.charAt(0)=='S')
            return "It's a Draw, you both chose Scissors!";
        else if(computerSelection.charAt(0)=='R')
            {compctr++;
            return "You Loose!, Rock beats Scissors!";}
        else
            {userctr++;
            return "You Win! Scissors beats Paper!";}
    }
}


function game()
{
    for(let i =0;i<5;i++)
    {
        playerSelection = prompt("Choose between Rock , Paper or Scissors !");
        computerSelection = getComputerChoice();
        cho = playerSelection.charAt(0).toUpperCase();
        console.log(playRound(cho,computerSelection));
    }
    if(userctr>compctr)
    {
        console.log("Since you won "+userctr+" matches and computer won "+compctr+" matches , congratulatiuons you won the game!");
    }
    else
        console.log("Since you won "+userctr+" matches and computer won "+compctr+" matches , sorry you lost the game!");
}

console.log(game());