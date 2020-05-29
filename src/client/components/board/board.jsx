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
      isWin: "",
      XScore: 0,
      OScore: 0,
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
    this.checkWin(3);
  }

  restartGame() {
    let prevMoves = [];
    let currentBoard = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    let isWin = "";
    this.setState({ board: currentBoard, prevMoves: prevMoves, isWin: isWin });
  }

  checkWin(boardSize) {
    let currentBoard = this.state.board;
    let potentialWinLines = [];
    let str = "";

    // collect row win lines
    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; y++) {
        str = str + currentBoard[x][y];
      }
      potentialWinLines.push(str);
      str = "";
    }

    // collect col win lines
    for (let y = 0; y < boardSize; y++) {
      for (let x = 0; x < boardSize; x++) {
        str = str + currentBoard[x][y];
      }
      potentialWinLines.push(str);
      str = "";
    }

    // collect right-down diagonal
    for (let i = 0; i < boardSize; i++) {
      str = str + currentBoard[i][i];
    }
    potentialWinLines.push(str);
    str = "";

    // collect left-down diagonal
    for (let i = 0; i < boardSize; i++) {
      str = str + currentBoard[i][boardSize - 1 - i];
    }
    potentialWinLines.push(str);
    str = "";

    let XPat = ""; 
    let OPat = ""; 
    let isWin;
    let XScore;
    let OScore;

    // generate winning sequence
    for (let i = 0; i < boardSize; i++) {
      XPat = XPat + "X";
      OPat = OPat + "O";
    }

    // check for winning sequence
    if (potentialWinLines.includes(XPat)) {
      isWin = "X";
      XScore = parseInt(this.state.XScore) + 1;
      this.setState({ XScore: XScore});
    } else if (potentialWinLines.includes(OPat)) {
      isWin =  "O"; 
      OScore = this.state.OScore + 1;
      this.setState({ OScore: OScore});
    } 
    this.setState({ isWin: isWin });

  }

  render() {
    console.log("board: ", this.state.board);
    console.log("previous moves: ", this.state.prevMoves);
    console.log("x score: ", this.state.XScore);


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
    
    let winMsg;
    if (this.state.isWin === "X") {
      winMsg = (
        <p>X has won the game!</p>
      );
    } else if (this.state.isWin === "O") {
      winMsg = (
        <p>O has won the game!</p>
      );
    }

    return (
      <div>
        <h3>X-Score: {this.state.XScore}</h3>
        <h3>O-Score: {this.state.OScore}</h3>
        <div className="item">{board}</div>
        <div>{winMsg}</div>
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
