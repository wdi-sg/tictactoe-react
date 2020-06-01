import React from 'react';

import Start from '../buttons/start';
import Reset from '../buttons/reset';

class Board extends React.Component {
    constructor() {

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        playerTurn: 1,
        start: false
      }

      this.startButton = this.startButton.bind(this)
      this.resetButton = this.resetButton.bind(this)

    }

    squareClick(colIndex, rowIndex) {
        if (this.state.start) {
            const tempBoard = this.state.board;

            if (tempBoard[rowIndex][colIndex] === "i") {
                if (this.state.playerTurn === 1) {
                    tempBoard[rowIndex][colIndex] = "X";

                    this.setState({
                        board: tempBoard,
                        playerTurn: 2
                    })
                } else {
                    tempBoard[rowIndex][colIndex] = "O";

                    this.setState({
                        board: tempBoard,
                        playerTurn: 1
                    })
                }
            }
        }
    }

    startButton() {
        this.setState({
            start: true
        })
    }

    resetButton() {
        this.setState({
            board: [
              ['i','i','i'],
              ['i','i','i'],
              ['i','i','i']
            ]
        })
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <div
                        className="square"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {col === "i" ? "" : col}
                    </div>
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
            {board}
            <div>
                <Start startButton={this.startButton} />
                <br/>
                <Reset resetButton={this.resetButton} />
            </div>
          </div>
        );
    }
}

export default Board;