let computerSelection;
let cho;
let userctr = 0;
let compctr =0;

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

function playRound(cho , computerSelection)
{
    if(cho=='R')
    {
        if(computerSelection.charAt(0)=='R')
        {    const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "It's a Draw, you both chose Rock!";
            content.classList.add('text1');
            container.appendChild(content);
            
        }   
        else if(computerSelection.charAt(0)=='P')
            {compctr++;
            const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "You Loose!, Paper beats Rock!";
            content.classList.add('text1');
            container.appendChild(content);

            updateComp();
            }
        else
            {userctr++;
            const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "You Win! Rock beats Scissors!";
            content.classList.add('text1');
            container.appendChild(content);

            updateUser();
            }
    }
    else if(cho=='P')
    {
        if(computerSelection.charAt(0)=='P')
        {
            const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "It's a Draw, you both chose Paper!";
            content.classList.add('text1');
            container.appendChild(content);
        }
        else if(computerSelection.charAt(0)=='R')
        {   userctr++;
            const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "You Win!, Paper beats Rock!";
            content.classList.add('text1');
            container.appendChild(content);

            updateUser();
        }
        else
            {   compctr++;
                const container = document.querySelector('body');
                const content = document.createElement('div');
                content.textContent = "You Loose! Scissors beats Paper!";
                content.classList.add('text1');
                container.appendChild(content);  

                updateComp();
            }
    }
    else
    {
        if(computerSelection.charAt(0)=='S')
        {
            const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "It's a Draw, you both chose Scissors!";
            content.classList.add('text1');
            container.appendChild(content);      
        }
        else if(computerSelection.charAt(0)=='R')
        {   compctr++;
            const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "You Loose!, Rock beats Scissors!";
            content.classList.add('text1');
            container.appendChild(content);

            updateComp();
        }
        else
        {   userctr++;
            const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "You Win! Scissors beats Paper!";
            content.classList.add('text1');
            container.appendChild(content);

            updateUser();
        }
    }
}

function result()
{
    if(userctr && compctr >0)
    {
        if(userctr > compctr)
        {
            const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "You beat the computer in the game of 5, Congrats!";
            content.setAttribute('style', 'color : rgb(0, 255, 0); font-weight: 800;');
            content.classList.add('text');
            container.appendChild(content);
        }
        else if(userctr < compctr)
        {
            const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "Sorry the computer beat you in the game of 5.";
            content.setAttribute('style', 'color : rgb(255, 0, 0); font-weight: 800;');
            content.classList.add('text');
            container.appendChild(content);
        }
        else
        {
            const container = document.querySelector('body');
            const content = document.createElement('div');
            content.textContent = "It's a draw between you and the computer in this game of 5.";
            content.classList.add('text');
            container.appendChild(content);
        }
    }
}

function evaluate()
{
    counter++;
        if(counter <= 5)
        {
            computerSelection = getComputerChoice();
            playRound(cho,computerSelection);
        }
        if(counter == 5)
            result();
}

function updateUser()
{
    const parent = document.querySelector('.user');
    const childrem = document.querySelector('.pt1');

    const childadd = document.createElement('div');
    childadd.classList.add('pt1');
    const heading = document.createElement('h1');
    heading.textContent = userctr;
    childadd.appendChild(heading);
    parent.removeChild(childrem);
    parent.appendChild(childadd);
}

function updateComp()
{
    const parent = document.querySelector('.computer');
    const childrem = document.querySelector('.pt2');

    const childadd = document.createElement('div');
    childadd.classList.add('pt2');
    const heading = document.createElement('h1');
    heading.textContent = compctr;
    childadd.appendChild(heading);
    parent.removeChild(childrem);
    parent.appendChild(childadd);
}

let counter = 0;
const btn1 = document.querySelector('.b1');
btn1.addEventListener('click',() =>
    {
        cho = 'R';
        evaluate();
    });

const btn2 = document.querySelector('.b2');
btn2.addEventListener('click',() =>
    {
        cho = 'P';
        evaluate();
    });

const btn3 = document.querySelector('.b3');
btn3.addEventListener('click',() =>
    {
        cho = 'S';
        evaluate();
    });


    