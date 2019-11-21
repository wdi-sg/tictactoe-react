import React from 'react';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ],
        player: 1
      }
    }

    restart() {
      this.setState ( {
        board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ],
        player: 1
      })
    }

    // to check if Player1 wins
    xWin(value) {
      return value === "X";
    }

    // to check if Player2 wins
    oWin(value) {
      return value === "O";
    }

    // function checkWhoWon(array)
    gameWon(check) {
        if (check.every(this.xWin)) {
            //player1 wins
            alert("Player 1 wins!");
            this.restart();
            return;
        } else if (check.every(this.oWin)) {
            //player2 wins
            alert("Player 2 wins!");
            this.restart();
            return;
        }
    }

    //check results of rows
    //.slice() elements to obtain arrays of results of columns
    //.every() retrieved arrays if is true (i.e. all are same)
    //check which player wins

    checkResult() {

      var downDiag = [];
      var upDiag = [];

      for (var i = 0; i < this.state.board.length; i++) {

        //retrieve results of rows
        var row = this.state.board[i];
        console.log("row" + [i] + " is: " + row);
        // check if gameWon by row
        this.gameWon(row);

        var column = [];

        for (var j = 0; j < this.state.board[i].length; j++) {

            // retrieve results of columns
            var k = (this.state.board[j].slice(i, i+1)).toString();
            column.push( k );

            if ( i === j ) {
                var down = (this.state.board[i].slice(i, i+1)).toString();
                downDiag.push( down );

                var toSlice = this.state.board[i].length-[i+1];
                var toStopAt = this.state.board[i].length-i;
                var up = (this.state.board[i].slice( toSlice, toStopAt)).toString();
                upDiag.push( up );
            }

        }

        console.log("column" + [i] + " is: " + column);
        //check if gameWon by column
        this.gameWon(column);

        console.log("looping!");
      }

        console.log("downDiag is: " + downDiag);
        this.gameWon(downDiag);

        console.log("upDiag is: " + upDiag);
        this.gameWon(upDiag);

    }

    squareClick(i, j) {
        // check if space already taken
        console.log( i, j );
        if ( this.state.board[i][j] !== null ) {
            alert("Please pick another space.");
            return;
        }
        // check which player and input tictac
        if (this.state.player%2 === 0) {
            this.state.board[i][j] = 'O';
            this.state.player += 1;
        } else {
            this.state.board[i][j] = 'X';
            this.state.player += 1;
        }
        // update board
        console.log(this.state.board);
        this.setState( {
            board: this.state.board
        } )
        // check results
        if (this.state.player >= 5) {
            this.checkResult();
        }
        // reset if stalemate
        if (this.state.player > 9) {
            this.restart();
        }
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <div className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}
                    >
                        {this.state.board[colIndex][rowIndex]}
                    </div>
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