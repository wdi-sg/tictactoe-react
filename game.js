let currentPlayer = "❌";
var won = false;
var squaresPlayed = 0;
var scoreX = 0;
var scoreO = 0;

function checkWins(result) {
    console.log(result)

    if (
        (result[0][0] === "❌" && result[0][1] === "❌" && result[0][2] === "❌") ||
        (result[0][0] === "⭕️" && result[0][1] === "⭕️" && result[0][2] === "⭕️") ||

        (result[1][0] === "❌" && result[1][1] === "❌" && result[1][2] === "❌") ||
        (result[1][0] === "⭕️" && result[1][1] === "⭕️" && result[1][2] === "⭕️") ||

        (result[2][0] === "❌" && result[2][1] === "❌" && result[2][2] === "❌") ||
        (result[2][0] === "⭕️" && result[2][1] === "⭕️" && result[2][2] === "⭕️") ||

        (result[0][0] === "❌" && result[1][0] === "❌" && result[2][0] === "❌") ||
        (result[0][0] === "⭕️" && result[1][0] === "⭕️" && result[2][0] === "⭕️") ||

        (result[0][1] === "❌" && result[1][1] === "❌" && result[2][1] === "❌") ||
        (result[0][1] === "⭕️" && result[1][1] === "⭕️" && result[2][1] === "⭕️") ||

        (result[0][2] === "❌" && result[1][2] === "❌" && result[2][2] === "❌") ||
        (result[0][2] === "⭕️" && result[1][2] === "⭕️" && result[2][2] === "⭕️") ||

        (result[0][0] === "❌" && result[1][1] === "❌" && result[2][2] === "❌") ||
        (result[0][0] === "⭕️" && result[1][1] === "⭕️" && result[2][2] === "⭕️") ||

        (result[0][2] === "❌" && result[1][1] === "❌" && result[2][0] === "❌") ||
        (result[0][2] === "⭕️" && result[1][1] === "⭕️" && result[2][0] === "⭕️")
        ){
            if (currentPlayer === "❌") {
                scoreO++
                alert( "Player ⭕️ won!\n\nCurrent score: \n Player ⭕️: " + scoreO + "\n Player ❌: " + scoreX );
                won = true;
            } else {
                scoreX++
                alert( "Player ❌ won!\n\nCurrent score: \n Player ⭕️: " + scoreO + "\n Player ❌: " + scoreX );
                won = true;
            }
        }

        checkDraw ();
}

function checkDraw () {
    if (squaresPlayed === 9 && won === false) {
        alert("It's a draw! \n\nCurrent score: \n Player ⭕️: " + scoreO + "\n Player ❌: " + scoreX )
    }
}