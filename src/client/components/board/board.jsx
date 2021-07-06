import React from 'react';

class Board extends React.Component {
  constructor(){

    super()

    this.state = {
      board: [
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ],
      counter: 0,
    }

  }

  handleClick(event, colIndex, rowIndex) {
    let counter = this.state.counter;
    let board = this.state.board;
    let playturn;

    if (counter % 2 === 0) {
      playturn = "X";
    } else {
      playturn = "O";
    }

    counter++;

    if (board[rowIndex][colIndex] === null) {
      board[rowIndex][colIndex] = playturn;
    }

    event.target.disabled = true;

    this.setState({board, counter});
  }

  render() {
      const board = this.state.board.map( (row,rowIndex) => {

        // make a single row
        const rows = row.map( (col,colIndex) => {
          console.log("*** colIndex ***", colIndex);
          // make each column
          return (
                  <button className="btn btn-primary" onClick={(e)=>{this.handleClick(e, colIndex, rowIndex)}} key={colIndex}>
                    {col}
                  </button>
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
          <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
            {board}
          </div>

        </div>
      );
  }
}


export default Board;
