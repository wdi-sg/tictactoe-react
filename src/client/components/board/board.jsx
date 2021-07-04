import React from "react";
import classnames from 'classnames';



class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      playerTurn: true,
      score: new Array(9).fill("."),
      result: "",
      board: [
        ["\t", "\t", "\t"],
        ["\t", "\t", "\t"],
        ["\t", "\t", "\t"],
      ],
    };
  }

  squareClick(colIndex, rowIndex) {
    let {playerTurn} = this.state;
    let currentIndex = Math.floor(colIndex) + Math.floor(rowIndex) * 3;
    let value;
    let result;
    if (this.state.board[rowIndex][colIndex] === "\t") {
      if (playerTurn === true) {
        value = "O";
        const score = this.state.score.slice();
        score[currentIndex] = value;
        result = this.chkWin(score);
        this.setState({playerTurn: false, score, result});
      }
      else {
        value = "X";
        const score = this.state.score.slice();
        score[currentIndex] = value;
        result = this.chkWin(score);
        this.setState({playerTurn: true, score, result});
      }
      const newBoard = this.state.board.slice();
      newBoard[rowIndex][colIndex] = value;
      this.setState({board: newBoard});
    }
  }

  chkWin(score){
    const checkStr = score.join("");
    console.log(checkStr)
    if (/XXX|X...X...X|X..X..X|..X.X.X/.test(checkStr)) {
      return "Computer WON";
    } else if (/OOO|O...O...O|O..O..O|..O.O.O/.test(checkStr)) {
      return "Player WON";
    } else {
      return undefined;
    }
  }

  render() {
    console.log("board", this.state.board);

    const {result} = this.state;
    const board = this.state.board.map((row, rowIndex) => {
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
            {"\t"}{col}{"\t"}
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
        {result === undefined ? "" : result}
        {board}
      </div>
    );
  }
}

export default Board;
