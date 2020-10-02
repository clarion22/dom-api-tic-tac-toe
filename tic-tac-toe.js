let currentPlayerSymbol = "x";
const squareValues = ["", "", "", "", "", "", "", "", ""];
let gameStatus = '';
// const checkGameStatus = function() {
function checkGameStatus() {
    //check the rows
    for (let i = 0; i < 9; i+=3) {
        if (squareValues[i] !== ''
        && squareValues[i] === squareValues[i + 1]
        && squareValues[i] === squareValues[i + 2]) {
            gameStatus = squareValues[i];
            break;
        }
    }
    //check the columns
    for (let i = 0; i < 3; i++) {
        if (squareValues[i] !== ''
        && squareValues[i] === squareValues[i + 3]
        && squareValues[i] === squareValues[i + 6]) {
            gameStatus = squareValues[i];
            break;
        }
    }

    //check the diagnols;
    if (squareValues[0] !== ''
    && squareValues[0] === squareValues[4]
    && squareValues[0] === squareValues[8]) {
        gameStatus = squareValues[0];
    }
    if (squareValues[2] !== ''
    && squareValues[2] === squareValues[4]
    && squareValues[2] === squareValues[6]) {
        gameStatus = squareValues[2];
    }
//check for tie
let boardIsFilled = true;
for (let i = 0; i < 9; i += 1){
if(squareValues[i] === '') {
boardIsFilled=false;
break;
}
}
if (boardIsFilled) {
gameStatus ='None';
}


    if (gameStatus != '') {
        document
        .getElementById('game-status')
        .innerHTML = `Winner is: ${gameStatus.toUpperCase()}`
.getElementById('new-game').disable = false;
    }

}

window.addEventListener("DOMContentLoaded", (event) => {
document.getElementById("tic-tac-toe-board")
document.addEventListener("click", event => {
    const targetId =event.target.id;
    // console.log("a squareis clicked", event.target.id);

    if (!targetId.startsWith("square-")) {
        return;
    }
   const squareNums = Number.parseInt(targetId[targetId.length - 1]);
    if (squareValues[squareNums] !== "") { return};

    const img = document.createElement('img');
    img.src = `/images/${currentPlayerSymbol}.svg`;
    event.target.appendChild(img);

    squareValues[squareNums] = currentPlayerSymbol;

    if (currentPlayerSymbol === "x") {
        currentPlayerSymbol = "o";

    } else {
        currentPlayerSymbol = "x";
    }
    checkGameStatus();
})
document.getElementById("new-game").addEventListener("click", event => {
    currentPlayerSymbol = "x";
    squareValues = ["", "", "", "", "", "", "", "", ""];
    gameStatus = '';
    document
        .getElementById('game-status')
        .innerHTML = '';
});




});
