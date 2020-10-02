let currentPlayerSymbol = "x";
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

    const img = document.createElement('img');
    img.src = `/images/${currentPlayerSymbol}.svg`;
    event.target.appendChild(img);

    squareValues[squareNums] = currentPlayerSymbol;

    if (currentPlayerSymbol === "x") {
        currentPlayerSymbol = "o";

    } else {
        currentPlayerSymbol = "x";
    }

})


});
