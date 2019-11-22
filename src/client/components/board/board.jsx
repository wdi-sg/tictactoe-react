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
      player: "X",
      message: null,
      xScore: 0,
      oScore: 0
    }
  }
    

    squareClick(row, column){
        console.log( row, column, this.state.player);
        let board = this.state.board;
        let currentPlayer = this.state.player;
        if (!board[row][column]) {
          if (currentPlayer == "X") {
            this.setState({player: "O"})
          } else {
            this.setState({player: "X"})
          }
        }
        board[row][column] = currentPlayer;
        console.log(board)
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
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
          <div className="item">
            {board}
          </div>
        );
    }
}

export default Board;
