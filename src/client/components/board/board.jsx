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
        move: 0,
      }

    }

    handleClick(event, colIndex, rowIndex) {
      let board = this.state.board;
      let move = this.state.move;
      let marker;

      if (move % 2 === 0) {
        marker = "X";
      } else {
        marker = "O";
      }

      move++;

      if (board[rowIndex][colIndex] === null) {
        board[rowIndex][colIndex] = marker;
      }

      event.target.disabled = true;

      this.setState({board, move});
    }
    
    render() {
        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {
            console.log("*** colIndex ***", colIndex);
            // make each column
            return (
                    <button onClick={(e)=>{this.handleClick(e, colIndex, rowIndex)}} key={colIndex}>
                      {col}
                    </button>
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
