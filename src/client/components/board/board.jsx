import React from 'react';

class Board extends React.Component {
  constructor() {

    super()

    this.state = {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
    }

  }

  squareClick(colIndex, rowIndex) {
    console.log(colIndex, rowIndex);
    this.setState('X')
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

    const maxTurns = 8;
    let playerTurn = 0;
    let cursor;

    if (playerTurn == 0) {
      cursor = 'O';

    }


    return (
      <div className="item">
        <h2 id='display'>Hello</h2>
        {board}
      </div>
    );
  }
}

export default Board;
