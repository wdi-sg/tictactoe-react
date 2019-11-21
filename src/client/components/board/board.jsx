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
        player: "X"
      }

    }

    squareClick(row, column){
        console.log( this.state.player );
        if(this.state.player === "X"){
            this.setState({player: "O"})
        } else {
            this.setState({player: "X"})
        }

        let board = this.state.board
        board[row][column] = this.state.player
        this.setState({
          board: board
        })

        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if (board[i][j] === "X" && board[i][j+1] === "X" && board[i][j+2] === "X"){
                    alert("You won!")
                }
                if (board[i][j] === "X" && board[i+1][j] === "X" && board[i+2][j] === "X"){
                    alert("You won!")
                }
                if (board[i][i] === "X" && board[i+1][i+1] === "X" && board[i+2][i+2] === "X"){
                    alert("You won!")
                    return
                }
                if (board[j][i+2] === "X" && board[j+1][i+1] === "X" && board[j+2][i] === "X"){
                    alert("You won!")
                }
            }
        }


      }



    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            let word = this.state.player

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