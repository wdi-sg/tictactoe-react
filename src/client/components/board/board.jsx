import React from 'react';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        playerTurn: 1
      }

    }

    squareClick(colIndex, rowIndex){
        const tempBoard = this.state.board;

        if (tempBoard[rowIndex][colIndex] === "i") {
            if (this.state.playerTurn === 1) {
                tempBoard[rowIndex][colIndex] = "X";

                this.setState({
                    board: tempBoard,
                    playerTurn: 2
                })
            } else {
                tempBoard[rowIndex][colIndex] = "O";

                this.setState({
                    board: tempBoard,
                    playerTurn: 1
                })
            }
        }
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <div
                        className="square"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {col === "i" ? "" : col}
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