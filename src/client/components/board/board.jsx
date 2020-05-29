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
      prevMoves: []
    };
  }

  squareClick(rowIndex, colIndex) {
    console.log(rowIndex, colIndex);
    
  }

  render() {
    console.log("board", this.state.board);

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
            {col} : {rowIndex} : {colIndex}
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

    return <div className="item">{board}</div>;
  }
}

export default Board;
