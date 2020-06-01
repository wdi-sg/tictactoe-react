import React from 'react';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ["","",""],
          ["","",""],
          ["","",""]
        ],
        lastMove: []
      }

    }

    squareClick(colIndex, rowIndex){
        console.log( colIndex, rowIndex );

        let lastMove = this.state.lastMove;
        let currentBoard= this.state.board;

        //check current player and prevents clicking on already clicked box

        if (lastMove.length === 0) {
          currentBoard[rowIndex][colIndex] = "O";
          lastMove.push("O");
        } else if (lastMove[lastMove.length - 1] === "O" && currentBoard[rowIndex][colIndex] === "") {
          currentBoard[rowIndex][colIndex] = "X";
          lastMove.push("X");
        } else if (lastMove[lastMove.length - 1] === "X" && currentBoard[rowIndex][colIndex] === "") {
          currentBoard[rowIndex][colIndex] = "O";
          lastMove.push("O");
        } 
    
        this.setState({ board: currentBoard, lastMove: lastMove });
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <span
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        [ {col} ] 
                    </span>
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
