const currentPlayerSymbol = "x";
const squareValues = ["", "", "", "", "", "", "", "", ""];

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

    const imgx = document.createElement('img');
    const imgo = document.createElement('img');
    imgx.src = '/images/x.svg';
    imgo.src = '/images/o.svg';
    event.target.appendChild(imgx);

    squareValues[squareNums] = currentPlayerSymbol;

    if (currentPlayerSymbol === "x") {
        currentPlayerSymbol = "o";
    } else {
        currentPlayerSymbol = "x";
    }
   
})


});