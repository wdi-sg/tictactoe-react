import React from 'react';

class Board extends React.Component {
  constructor() {

    super()

    this.state = {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      turns: 0,
      cursor: 'X',
      maxTurns: 8,
      playerTurn: 0

    }

  }

  squareClick(colIndex, rowIndex) {
    console.log(colIndex, rowIndex);
  }

  playerClick() {
    console.log('Player ' + this.state.cursor + "'s Move");
    console.log("clicked");

    if (this.state.turns <= this.state.maxTurns) {
      var turns = this.state.turns + 1;
      this.setState({ turns: turns });

      if (this.state.cursor == 'X') {
        this.setState({ cursor: 'O' });
      }
      else if (this.state.cursor == 'O') {
        this.setState({ cursor: 'X' });
      }
    }//alternating players

    console.log("moves made :", this.state.turns + 1);
  }

  render() {
    console.log("rendering");
    console.log("board", this.state.board);

    // while (this.state.turns <= this.state.maxTurns) {
    //   var playerTurn = this.state.playerTurn;
    //   if (this.state.playerTurn == 0) {
    //     this.setState({ cursor: 'X' });
    //     playerTurn++;
    //     this.setState({ playerTurn: playerTurn });
    //   }
    //   else if (playerTurn == 1) {
    //     this.setState({ cursor: 'O' });
    //     playerTurn--;
    //     this.setState({ playerTurn: playerTurn });
    //   }

    // }//end of while-loop

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
              this.playerClick();
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

    return (
      <div className="item">
        <h2 id='display'>Hello</h2>
        {board}
      </div>
    );
  }
}

export default Board;
