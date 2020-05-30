import React from 'react';

class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      player: 'O',
      currentPlayer: 'X',
      counter: 0
    };
  }
  squareClick(row, column) {
    if (this.state.board[row][column] === null) {
      if (this.state.counter % 2 === 0) 
        this.state.board[row][column] = 'X';
        this.state.player = 'X';
        this.state.currentPlayer = 'O';
      } else {
        this.state.board[row][column] = 'O';
        this.state.player = 'O';
        this.state.currentPlayer = 'X';
      }
      this.state.counter++;
      this.setState({
        board: this.state.board,
        currentPlayer: this.state.currentPlayer
      });
    }
  }

  render() {
    console.log('board', this.state.board);

    const board = this.state.board.map((row, rowIndex) => {
      // make a single row
      const rows = row.map((col, colIndex) => {
        // make each column
        return (
          <p
            className="boo"
            key={colIndex}
            onClick={() => {
              this.squareClick(rowIndex, colIndex);
            }}
          >
            {col}
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
        <p>Current Player: {this.state.currentPlayer}</p>
        {board}
      </div>
    );
  }
}

export default Board;
