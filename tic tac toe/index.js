let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [0,1,2],
    [0,1,2],
    [0,1,2],
    [0,1,2],
    [0,1,2],

]

const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("was clicked")
        if(turn0) {
            // playerO
            box.innerText = "X"
            turn0 = false;
        }else {
            // player X
            box.innerText = "O"
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disabledBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner) => {
 msg.innerText = `Congratulations, Winner is ${winner}`;
 msgContainer.classList.remove("hide")
 disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        // console.log(pattern)
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);