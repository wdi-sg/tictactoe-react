import React from "react";
import classnames from 'classnames';



class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      playerTurn: true,
      score: [],
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
    let value;
    let result;
    if (this.state.board[rowIndex][colIndex] === "\t") {
      if (playerTurn === true) {
        value = "O";
        const score = this.state.score.slice();
        score.push(value);
        result = this.chkWin(score);
        this.setState({playerTurn: false, score: score, result: result});
      }
      else {
        value = "X";
        const score = this.state.score.slice();
        score.push(value);
        result = this.chkWin(score);
        this.setState({playerTurn: true, score: score, result: result});
      }
      const newBoard = this.state.board.slice();
      newBoard[rowIndex][colIndex] = value;
      this.setState({board: newBoard});
    }
  }

  chkWin(score){
    const checkStr = score.join("");
    if (/XXX|X...X...X|X....X....X|X..X..X|X.X.X/.test(checkStr)) {
      return "Computer WON";
    } else if (/OOO|O...O...O|O....O....O|O..O..O|O.O.O/.test(checkStr)) {
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
            // style={{border: "1px solid red"}}
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
