import React from 'react';

class Board extends React.Component {
  constructor(){

    super()

    this.state = {
      board: [
        ['.','.','.'],
        ['.','.','.'],
        ['.','.','.']
      ],
      turn: "x"
    }

  }

  squareClick(col, row) {
    console.log(col, row, this.state.turn);
    let currentTurn = this.state.turn;
    this.state.board[row][col] = currentTurn;
    let nextTurn = this.state.turn === "x" ? "o" : "x";
    this.setState({turn:nextTurn, board: this.state.board});
  }

  render() {
    console.log("board", this.state.board);

    const board = this.state.board.map( (row, rowIndex) => {

      // make a single row
      const rows = row.map( (col, colIndex) => {
        // make each column
        return (
          <div
            className="boo"
            key={colIndex}
            onClick={()=>{
              this.squareClick(colIndex, rowIndex);
            }}
          >
            {col}
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
        <p>Current turn: {this.state.turn}</p>
        {board}
      </div>
    );
  }
}

export default Board;
