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
      // console.log(this.state.board[rowIndex][colIndex]);
      var currentCount = this.state.counter;
      let stateBoard = this.state.board;
      let winner;
      let playerOne = "O"
      let playerTwo = "X"
      let player;
      const countOcc = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
      const winnerFound = (player) => alert(player +" wins!");
      const whichPlayerWinRow = (rowIndex) => {
        if (stateBoard[rowIndex][0] === playerOne) {
          player = "Player One";
          winnerFound(player);
        } else if (stateBoard[rowIndex][0] === playerTwo) {
          player = "Player Two";
          winnerFound(player);
        }
        console.log(stateBoard[rowIndex][0]);
      }
      const whichPlayerWinCol = (colIndex) => {
        if (stateBoard[0][colIndex] === playerOne) {
          player = "Player One";
          winnerFound(player);
        } else if (stateBoard[0][colIndex] === playerTwo) {
          player = "Player Two";
          winnerFound(player);
        }
        console.log(stateBoard[rowIndex][0]);
      }

      const checkCountOcc = (arrRow, arrCol) => {
          if (countOcc(arrRow, 0) === 3) {
            whichPlayerWinRow(0);
            // stateBoard[0].;
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
      if (currentCount%2 === 0 && stateBoard[rowIndex][colIndex] === " ") {
        stateBoard[rowIndex][colIndex] = "O";
        this.setState( { counter: currentCount + 1 } );
        this.state.playerOneRow.push(rowIndex);
        this.state.playerOneCol.push(colIndex);
        let playerOneRow = this.state.playerOneRow;
        let playerOneCol = this.state.playerOneCol;
        console.log("playerOneRow:   " + playerOneRow);
        console.log("playerOneCol:   " + playerOneCol);
        checkCountOcc(playerOneRow, playerOneCol);
      } else if (currentCount%2 === 1 && stateBoard[rowIndex][colIndex] === " ") {
        stateBoard[rowIndex][colIndex] = "X";
        this.setState( { counter: currentCount + 1 } );
        this.state.playerTwoRow.push(rowIndex);
        this.state.playerTwoCol.push(colIndex);
        let playerTwoRow = this.state.playerTwoRow;
        let playerTwoCol = this.state.playerTwoCol;
        console.log("playerOneRow:   " + playerTwoRow);
        console.log("playerOneCol:   " + playerTwoCol);
        checkCountOcc(playerTwoRow, playerTwoCol)
      } else {
        this.setState( { counter: currentCount } );
      };
    };

    render() {
        // console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            return (
              <p className="boo" key={colIndex} onClick={()=>{this.squareClick(colIndex, rowIndex);}}>
                {col}
                {/*{col} : {colIndex} : {rowIndex}*/}
              </p>
            );
          });
          return (
            <div key={rowIndex} className="row">{rows}</div>
          );
        });
        return (
          <div className="item">{board}</div>
        );
    }
}

export default Board;
