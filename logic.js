
// check for winning matches based on user input
var checkForMatch = function (y, x, player, gameboard) {
    let matchFound = false;
    let winningCombinationBasedOnUserInput = getWinningCombinationBasedOnUserInput(y,x);

    // check if user input matches one of the possibilities
    for (let i = 0; i < winningCombinationBasedOnUserInput.length; i++) {
        matchFound = winningCombinationBasedOnUserInput[i].every(function(item) {
            let yAxis = item.split(",")[0];
            let xAxis = item.split(",")[1];

            return gameboard[yAxis][xAxis] === player["symbol"];
        });

        // alert player that he have win the game
        if (matchFound === true) {
            // disable game board since there is a winner
            alert(player["name"] + " win!")

            break;
        }
    }
}


// find all possible winning combination based on user input
var getWinningCombinationBasedOnUserInput = function (y, x) {
    let winningCombinationBasedOnUserInput = [];
    let winningCombination = getAllWinningCombination();

    // find all possible winning possibilities based on user input
    for (let i = 0; i < winningCombination.length; i++) {
        if (winningCombination[i].indexOf(y + "," + x) > -1) {
            winningCombinationBasedOnUserInput.push(winningCombination[i]);
        }
    }

    return winningCombinationBasedOnUserInput;
}

// get all the winning combination for row, column, diagonal
var getAllWinningCombination = function () {
    let temp = [];
    let boardSize = 3;
    let winningCombination = [];

    // 3 row winning sequence
    for (let a = 0; a < boardSize; a++) {
        for (var b = 0; b < boardSize; b++) {
            temp.push(a + "," + b);
        }
        winningCombination.push(temp);
        temp = [];
    }

    // 3 column winning sequence
    for (let a = 0; a < boardSize; a++) {
        for (var b = 0; b < boardSize; b++) {
            temp.push(b + "," + a);
        }
        winningCombination.push(temp);
        temp = [];
    }

    // diagonal winning sequence from top left corner (0,0) to bottom right corner (2,2)
    // pattern for this is +1 +1
    for (let a = 0; a < boardSize; a++) {
        temp.push((0 + a) + "," + (0 + a));
    }
    winningCombination.push(temp);
    temp = [];

    // diagonal winning sequence from bottom left corner (2,0) to top right corner (0,2)
    // pattern for this is -1 +1
    for (let a = 0; a < boardSize; a++) {
        temp.push((boardSize - 1 - a) + "," + (0 + a));
    }

    winningCombination.push(temp);
    temp = [];

    return winningCombination;
}


let playerOne = {
    name: "Player One",
    symbol: "O",
    mode: "human",
    turn: true,
    lose: 0,
    win: 0
}

let playerTwo = {
    name: "Player Two",
    symbol: "X",
    mode: "human",
    turn: false,
    lose: 0,
    win: 0
}