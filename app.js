let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let UserScore = document.querySelector("#user-score");
let CompScore = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawgame = () => {
    msg.innerText = "Game was Draw. Play Again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        UserScore.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        CompScore.innerText = compscore;
        msg.innerText = `You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("User choice = ", userchoice);
    //Generate Computer Choice
    const compchoice = gencompchoice();
    console.log("Comp choice = ", compchoice);

    if(userchoice === compchoice){
        //Draw
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //Paper, Scissors
            userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
             //Scissors, Rock
             userwin = compchoice === "scissor" ? false : true;
        }else{
            //Rock, Paper
            userwin = compchoice === "rock" ? false : true;
        }

        showWinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});