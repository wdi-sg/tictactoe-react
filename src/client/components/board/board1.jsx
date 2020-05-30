import React from "react";

class Board1 extends React.Component {
  constructor() {
    super();

    this.state = {
      board: [
        ["i", "i", "i"],
        ["i", "i", "i"],
        ["i", "i", "i"],
      ],
      // turn: 0,
    };
    this.turn = 0;
    // this.marking = ["X", "O"];
  }

  squareClick(something, something2) {
    console.log(something, something2);
    if (this.turn === 0) {
      this.state.board[something][something2] = "X";
      this.turn += 1;
      // this.state.turn + 1;
      // this.setState(currentTurn);
    } else if (this.turn === 1) {
      this.state.board[something][something2] = "O";
      // this.state.turn - 1;
      // this.setState({ currentTurn });
      this.turn -= 1;
    }
    // set the state of this component
    var currentState = {
      board: this.state.board,
      turn: this.state.turn,
    };
    this.setState(currentState);
  }

  render() {
    console.log("board", this.state.board);

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
            {/* {col} : {colIndex} : {rowIndex} */}
            {this.state.board[colIndex][rowIndex]}
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
      <div>
        <div className="item">{board}</div>
      </div>
    );
  }
}

export default Board1;
