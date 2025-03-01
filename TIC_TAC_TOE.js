let choice  = prompt("Hey! Do you want to play a game of Tic Tac Toe? (Yes/No)");

if(choice.toLowerCase() === "yes"){
    alert("Great! Let's start the game");

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let exit = document.querySelector("#exit-btn");

let turnO = true; //player X,player Y
let count = 0; //to track draw

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () =>{
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){ 
            //player X turn
            box.innerText = "O";
            turnO = false;
        }
        else{ 
            //player Y turn
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count == 9 && !isWinner){
            gameDraw();
        }
     });
});

const gameDraw = () => {
    msg.innerText = `Khichdi Pak Gyi!!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations,  Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                return false;
            }
        }
    }
};

exit.addEventListener("click", () => {
    alert("Thanks for playing!");
});

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
}

else{
    alert("Okay! Maybe next time");
    exit.addEventListener("click", () => {
        alert("Thanks for playing!");
    });
}