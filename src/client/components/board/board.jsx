import React from 'react';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [' ',' ',' '],
          [' ',' ',' '],
          [' ',' ',' ']
        ],

        counter: 0,

        playerOneRow: [],

        playerOneCol: [],

        playerTwoRow: [],

        playerTwoCol: []

      }

    }

    squareClick(colIndex, rowIndex){

      console.log( rowIndex, colIndex );
      
      let currentCount = this.state.counter;

      let stateBoard = this.state.board;

      let winner;

      let playerOne = "O"

      let playerTwo = "X"

      let player;

      let message;

      //check occurrence of each row and column for each player if equal to 3
      const countOcc = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

      //display winner 
      const winnerFound = (player) => {

        message = player + " wins!";

        alert(message);

      };

      // win by row.
      const whichPlayerWinRow = (rowIndex) => {

        if (stateBoard[rowIndex][0] === playerOne) {

          player = "Player One";

          winnerFound(player);

        } else if (stateBoard[rowIndex][0] === playerTwo) {

          player = "Player Two";

          winnerFound(player);

        }

      }

      // win by column.
      const whichPlayerWinCol = (colIndex) => {

        if (stateBoard[0][colIndex] === playerOne) {

          player = "Player One";

          winnerFound(player);

        } else if (stateBoard[0][colIndex] === playerTwo) {

          player = "Player Two";

          winnerFound(player);

        }

      }

      //check which row and column has 3 in a row
      const checkCountOcc = (arrRow, arrCol) => {

        if (countOcc(arrRow, 0) === 3) {

          whichPlayerWinRow(0);

        } else if (countOcc(arrRow, 1) === 3) {

          whichPlayerWinRow(1);

        } else if (countOcc(arrRow, 2) === 3) {

          whichPlayerWinRow(2);

        } else if (countOcc(arrCol, 0) === 3) {

          whichPlayerWinCol(0);

        } else if (countOcc(arrCol, 1) === 3) {

          whichPlayerWinCol(1);

        } else if (countOcc(arrCol, 2) === 3) {

          whichPlayerWinCol(2);

        };

      };

      //Player one when
      if (currentCount%2 === 0 && stateBoard[rowIndex][colIndex] === " ") {

        stateBoard[rowIndex][colIndex] = playerOne;

        this.setState( { counter: currentCount + 1 } );

        this.state.playerOneRow.push(rowIndex);

        this.state.playerOneCol.push(colIndex);

        let playerOneRow = this.state.playerOneRow;
        
        let playerOneCol = this.state.playerOneCol;
        
        //check diagonally for same symbol first. Then check rows and columns.
        if (stateBoard[0][0] === playerOne && stateBoard[0][0] === stateBoard[1][1] && stateBoard[1][1] === stateBoard[2][2] ){

          player = "Player One"

          winnerFound(player);

        } else if (stateBoard[0][2] === playerOne && stateBoard[0][2] === stateBoard[1][1] && stateBoard[1][1] === stateBoard[2][0]){
          
          player = "Player One"
          
          winnerFound(player);
        
        } else if (currentCount === 8 && player === '') {
        
          //display tie
          message = "It is a tie!";
        
          alert(message)
        
        } else {
        
          checkCountOcc(playerOneRow, playerOneCol);
        
        }

      //Player two when 
      } else if (currentCount%2 === 1 && stateBoard[rowIndex][colIndex] === " ") {
       stateBoard[rowIndex][colIndex] = playerTwo;
       
        this.setState( { counter: currentCount + 1 } );

        this.state.playerTwoRow.push(rowIndex);

        this.state.playerTwoCol.push(colIndex);

        let playerTwoRow = this.state.playerTwoRow;
        
        let playerTwoCol = this.state.playerTwoCol;

        if (stateBoard[0][0] === playerTwo && stateBoard[0][0] === stateBoard[1][1] && stateBoard[1][1] === stateBoard[2][2] ){

          player = "Player Two"

          winnerFound(player);

        } else if (stateBoard[0][2] === playerTwo && stateBoard[0][2] === stateBoard[1][1] && stateBoard[1][1] === stateBoard[2][0]){

          player = "Player Two"

          winnerFound(player);

        } else if (currentCount === 8 && player === '') {

          //display tie
          message = "It is a tie!";

          alert(message)

        } else {

          checkCountOcc(playerTwoRow, playerTwoCol)

        }

      } else {

        this.setState( { counter: currentCount } );

      };

    };

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {col} : {colIndex} : {rowIndex}
                    </p>
            );

          });

          // return the complete row
          return (
            <div key={rowIndex} className="row">
              {rows}
            </div>

          );

        });

        return (
          <div className="item">
            {board}
          </div>
        );
    }
}

export default Board;
