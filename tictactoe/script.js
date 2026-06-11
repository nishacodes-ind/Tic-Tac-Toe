let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msgval = document.querySelector("#msg");

let turnO = true;
let count = 0;
let winPatterns =
    [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
    ];
const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}
const showDraw = () => {
    msgval.innerText = "Game Draw!";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disabledBoxes = () => {
    for (box of boxes){ 
         box.disabled = true;
     } }
    boxes.forEach((box) => { 
    box.addEventListener("click", () => { 
        if (turnO) { 
            box.innerText = "O";
            turnO = false;
            }
        else 
            { 
                box.innerText = "X";
                turnO = true;
            } 
                box.disabled = true;
                count++;
                checkWinner(); 
    });
 });
const showWinner = (winner) => {
    msgval.innerText = `Congratulation! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = () => {
    let winnerFound = false;
    for (pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) { 
                winnerFound = true;
                showWinner(pos1val);
                return;
             }
        }
    }

    if (count === 9 && !winnerFound) {
        showDraw();
    }
}
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);