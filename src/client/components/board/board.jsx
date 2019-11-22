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
    this.stage = 0;
    // win = false;
  }

  checkWin() {
    let board = this.state.board.toString();
    console.log('REGEX', board);
    if (/XXX|X...X...X|X....X....X|X..X..X/.test(board)) {
      alert("X WLLELEELE");
    } else if (/OOO|O...O...O|O....O....O| O..O..O /.test(board)) {
      alert("0 WLLELEELE");
    } else {
      return false;
    }
  };



  squareClick(colIndex, rowIndex) {
    console.log("Selected box:", colIndex, rowIndex);
    if (this.turn % 2 === 0 && this.stage < 9) {
      this.state.board[colIndex][rowIndex] = "X"
      this.checkWin();
      // let currentState = {
      //   board: this.state.board
      // }
      // this.setState(currentState);
    } else if (this.turn % 2 !== 0 && this.stage < 9) {
      this.state.board[colIndex][rowIndex] = "O"
      this.checkWin();
    }
    this.turn += 1;
    this.stage += 1;
    // console.log("HAAHH", this.state.board);
    // console.log("length", this.state.board.length)
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
