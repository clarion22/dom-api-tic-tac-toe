let currentPlayerSymbol = "x";
let squareValues = ["", "", "", "", "", "", "", "", ""];
let gameStatus = '';

const key = 'tic-tac-toe-game';
function saveGameStatus() {
    const state = {
        currentPlayerSymbol,
        squareValues,
        gameStatus,
    }
    localStorage.setItem(key, JSON.stringify(state));
}

function loadGameState() {
    const savedState = localStorage.getItem(key);
    if (savedState === null) {
        return;

    }
    const state = JSON.parse(savedState);
    currentPlayerSymbol = state.currentPlayerSymbol;
    squareValues = state.squareValues;
    gameStatus = state.gameStatus;

    for (let i = 0; i < 9; i += 1) {
        if (squareValues[i] !== '') {
            const img = document.createElement('img');
            img.src = `/images/${squareValues[i]}.svg`;
            document.getElementById(`square-${i}`).appendChild(img);
        }
    }
    if (gameStatus !== '') {
        document.getElementById("game-status").innerHTML = `Winner: ${gameStatus}`;
        document.getElementById('new-game').disabled = false;
        document.getElementById('give-up').disabled = true;

    } else {
        document.getElementById("game-status").innerHTML = '';
        document.getElementById('new-game').disabled = true;
        document.getElementById('give-up').disabled = false;
    }
}

function checkGameStatus() {
    //check the rows
    for (let i = 0; i < 9; i += 3) {
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
    for (let i = 0; i < 9; i += 1) {
        if (squareValues[i] === '') {
            boardIsFilled = false;
            break;
        }
    }
    if (boardIsFilled) {
        gameStatus = 'None';
    }


    if (gameStatus != '') {
        document
            .getElementById('game-status')
            .innerHTML = `Winner is: ${gameStatus.toUpperCase()}`

        document
            .getElementById('new-game').disabled = false;

        document
            .getElementById('give-up').disabled = true;
    }

}

window.addEventListener("DOMContentLoaded", (event) => {
    loadGameState();
    document.getElementById("tic-tac-toe-board")
    document.addEventListener("click", event => {
        const targetId = event.target.id;
        // console.log("a squareis clicked", event.target.id);

        if (!targetId.startsWith("square-")) {
            return;
        }
        const squareNums = Number.parseInt(targetId[targetId.length - 1]);
        if (squareValues[squareNums] !== "") { return };

        const img = document.createElement('img');
        img.src = `/images/${currentPlayerSymbol}.svg`;
        event.target.appendChild(img);

        squareValues[squareNums] = currentPlayerSymbol;

        // if (currentPlayerSymbol === "x") {
        //     currentPlayerSymbol = "o";

        // } else {
        //     currentPlayerSymbol = "x";
        // }

        function getRandomIntInclusive(min, max) {
            return Math.floor(Math.random() * max + min);
        }

        let int = getRandomIntInclusive(0, 8);

        boardIsFilled = true;
        for (let i = 0; i < 9; i += 1) {
            if (squareValues[i] === '') {
                boardIsFilled = false;
                break;
            }
        }
        while (squareValues[int] !== '' && !boardIsFilled) {
            int = getRandomIntInclusive(0, 8);
        }
        squareValues[int] = "o";
        const newImg = document.createElement('img');
        newImg.src = `/images/o.svg`;
        document.getElementById(`square-${int}`).appendChild(newImg);

        console.log(squareValues);


        checkGameStatus();
        saveGameStatus();
    })
    document.getElementById("new-game").addEventListener("click", event => {
        currentPlayerSymbol = "x";
        squareValues = ["", "", "", "", "", "", "", "", ""];
        gameStatus = '';
        document
            .getElementById('game-status')
            .innerHTML = '';
        for (let i = 0; i < 9; i++) {
            document
                .getElementById(`square-${i}`).innerHTML = '';
        }
        document
            .getElementById('new-game').disabled = true;
        document.getElementById('give-up').disabled = false;
    });
    document.getElementById("give-up").addEventListener("click", event => {
        if (currentPlayerSymbol === "x") {
            gameStatus = "o";

        } else {
            gameStatus = "x";
            saveGameStatus();

        }

        document
            .getElementById('game-status')
            .innerHTML = `Winner is: ${gameStatus.toUpperCase()}`

        document.getElementById("give-up").disabled = true;
        document.getElementById('new-game').disabled = false;
        saveGameStatus();


    });
})
