let playerScore = 0;
let computerScore = 0;

let playerScore_span = document.getElementById("player-score");
let computerScore_span = document.getElementById("computer-score");

//let score_div = document.querySelector(".score");
let result_div = document.querySelector(".result > p");

let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

// playerScore_span.textContent = "65";

rock_div.addEventListener("click",function(){
    console.log("We have clicked the rock div");
    game("rock");
});

paper_div.addEventListener("click",function(){
    console.log("We have clicked the paper div");
    game("paper");
});

scissors_div.addEventListener("click",function(){
    console.log("We have clicked the scissors div");
    game("scissors");
});

function computerPlay()
{
    let x = Math.floor(Math.random()*3);
    if(x == 0)
    {
        return "rock";
    }
    else if(x == 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection == "rock")
    {
        if(computerSelection == "scissors")
        {
            playerScore++;
            //return "You win! Rock beats scissors.";
            result_div.innerHTML = "You win! Rock beats scissors."
        }
        else if(computerSelection == "paper")
        {
            computerScore++;
            //return "You lose! Paper beats rock.";
            result_div.innerHTML = "You lose! Paper beats rock.";
        }
        else
        {
            //return "You tie!";
            result_div.innerHTML = "You tie!"
        }
    }

    if(playerSelection == "paper")
    {
        if(computerSelection == "scissors")
        {
            computerScore++;
            //return "You lose! Scissors beats paper.";
            result_div.innerHTML = "You lose! Scissors beats paper.";
        }
        else if(computerSelection == "rock")
        {
            playerScore++;
            //return "You win! Paper beats rock.";
            result_div.innerHTML = "You win! Paper beats rock!";
        }
        else
        {
            //return "You tie!"
            result_div.innerHTML = "You tie!";
        }
    }

    if(playerSelection == "scissors")
    {
        if(computerSelection == "rock")
        {
            computerScore++;
            //return "You lose! Rock beats scissors.";
            result_div.innerHTML = "You lose! Rock beats scissors.";
        }
        else if(computerSelection == "paper")
        {
            playerScore++;
            //return "You win! Scissors beats paper.";
            result_div.innerHTML = "You win! Scissors beats paper.";
        }
        else
        {
            //return "You tie!";
            result_div.innerHTML = "You tie!";
        }
    }
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
}


function game(input)
{
    let playerInput = input;
    let computerInput = computerPlay();
    playRound(playerInput,computerInput);

    if( computerScore == 5 || computerScore%5 == 0 && computerScore > 0)
    {
        result_div.innerHTML = "You have LOST :( <u>CLICK HERE</u> to play again";
        result_div.addEventListener("mouseover",function handler(e){
            result_div.style.cursor = "pointer";
            e.currentTarget.removeEventListener(e.type, handler);
        })

        result_div.addEventListener("click",function handler(e){
            playerScore = 0;
            computerScore = 0;
            playerScore_span.innerHTML = playerScore;
            computerScore_span.innerHTML = computerScore;
            result_div.innerHTML = "...";
            result_div.style.cursor = "default";
            e.currentTarget.removeEventListener(e.type, handler);
        });
    }

    if( playerScore == 5 || playerScore%5 == 0 && playerScore > 0)
    {
        result_div.innerHTML = "You have WON!!! :) <u>CLICK HERE</u> to play again";
        result_div.addEventListener("mouseover",function handler(e){
            result_div.style.cursor = "pointer";
            e.currentTarget.removeEventListener(e.type, handler);
        })

        result_div.addEventListener("click",function handler(e){
            console.log("We have clicked to restart");
            playerScore = 0;
            computerScore = 0;
            playerScore_span.innerHTML = playerScore;
            computerScore_span.innerHTML = computerScore;
            result_div.innerHTML = "...";
            result_div.style.cursor = "default";
            e.currentTarget.removeEventListener(e.type, handler);
        });
    }
}
