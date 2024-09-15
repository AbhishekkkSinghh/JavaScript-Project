let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector('#res-btn')
let newGame = document.querySelector('#new-game')
let mssgContainer = document.querySelector('.mess-container')
let msg = document.querySelector('#msg');

let turnO = true;               ///playerX.playerO

let winningStrategy = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

//after someone Won now boxes can't be clicked
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

//shows a upper text congratuating winner of game
const showWinnner = (winner)=>{
    msg.innerText=`Congratulatons ,Winner is ${winner}`;
    mssgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winningStrategy) {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let pos1VAl = boxes[pattern[0]].innerText
        let pos2VAl = boxes[pattern[1]].innerText
        let pos3VAl = boxes[pattern[2]].innerText
        
        if(pos1VAl != "" && pos2VAl != "" && pos3VAl != ""){
            if(pos1VAl == pos2VAl && pos2VAl== pos3VAl){
                console.log("Winner" , pos1VAl);
                showWinnner(pos1VAl);
            }
            
        }
    }

    
}

const resetGame = ()=>{
    turnO = true;
    enabledBoxes();
    mssgContainer.classList.add("hide");
}

