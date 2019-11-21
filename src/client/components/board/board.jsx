import React from 'react';
import styles from './style.scss';


class Board extends React.Component {
  constructor() {

    super()

    this.state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
    }
    this.turn = 0;
  }

  squareClick(colIndex, rowIndex) {
    console.log("Selected box:", colIndex, rowIndex);
    if (this.turn % 2 === 0) {
      this.state.board[colIndex][rowIndex] = "X"
    } else {
      this.state.board[colIndex][rowIndex] = "O"
    }
    this.turn += 1;
    console.log(this.state.board);
    let currentState = {
      board: this.state.board
    }
    this.setState(currentState);
  }

  render() {
    // save board status into a variable
    console.log("THIS IS YOUR BOARD STATUS", this.state.board);

    const board = this.state.board.map((row, rowIndex) => {
      // const boardStatus = this.state.board;
      // make a single row
      const rows = row.map((col, colIndex) => {

        // make each column
        return (
          <p
            className="boo"
            key={colIndex}
            onClick={() => {
              this.squareClick(colIndex, rowIndex);
            }}

          >
            {this.state.board[colIndex][rowIndex]}
          </p>
        );

      });

      // return the complete row
      return (
        <div key={rowIndex} className={styles.board}>
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
