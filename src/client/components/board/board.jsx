import React from "react";
import styles from "./board.scss";

class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      prevMoves: [],
    };
  }

  squareClick(rowIndex, colIndex) {
    console.log(rowIndex, colIndex);
    let prevMoves = this.state.prevMoves;
    let currentBoard = this.state.board;

    if (prevMoves.length === 0) {
      currentBoard[rowIndex][colIndex] = "X";
      prevMoves.push("X");
    } else if (
      prevMoves[prevMoves.length - 1] === "X" &&
      currentBoard[rowIndex][colIndex] === ""
    ) {
      currentBoard[rowIndex][colIndex] = "O";
      prevMoves.push("O");
    } else if (
      prevMoves[prevMoves.length - 1] === "O" &&
      currentBoard[rowIndex][colIndex] === ""
    ) {
      currentBoard[rowIndex][colIndex] = "X";
      prevMoves.push("X");
    }

    this.setState({ board: currentBoard, prevMoves: prevMoves });
  }

  restartGame() {
    let prevMoves = [];
    let currentBoard = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.setState({ board: currentBoard, prevMoves: prevMoves });
  }

  render() {
    console.log("board: ", this.state.board);
    console.log("previous moves: ", this.state.prevMoves);

    const board = this.state.board.map((row, rowIndex) => {
      // make a single row
      const rows = row.map((col, colIndex) => {
        // make each column
        return (
          <div
            className={styles.boo}
            key={colIndex}
            onClick={() => {
              this.squareClick(rowIndex, colIndex);
            }}
          >
            {col}
          </div>
        );
      });

      // return the complete row
      return (
        <div key={rowIndex} className={styles.row}>
          {rows}
        </div>
      );
    });

    return (
      <div>
        <div className="item">{board}</div>
        <div>
          <button
            className={styles.clicky}
            onClick={() => {
              this.restartGame();
            }}
          >
            Restart Game
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
