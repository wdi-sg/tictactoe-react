import React from 'react';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        player: "X"
      }

    }

    // checkWinner() {
    //     let winLines =
    //     [
    //         ["00", "01", "02"],
    //         ["01", "11", "21"]
    //     ]



    //     for (let i = 0; i < winLines.length; i++) {
    //         const [a, b, c] = winLines[i];
    //         if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
    //             console.log("You win!")
    //         }
    //     }
    // }

    checkWin() {
        let board = this.state.board
        if((board[0][0] && board[0][1] && board[0][2]) === "X") {
            alert("player " + this.state.player + "  wins!")
        }
    }

    squareClick(event, colIndex, rowIndex){
        console.log( "row and col index are: " + rowIndex + "," + colIndex);

        let newBoard = this.state.board

        if (this.state.board[rowIndex][colIndex] === '') {
                newBoard[rowIndex][colIndex] = this.state.player

                this.setState({
                    board: newBoard,
                    player: this.state.player === "X" ? "O" : "X"
        })

        this.checkWin()
        // this.checkWinner()
        }






    }



    render() {

        console.log("board", this.state.board);
        console.log("player turn: " + this.state.player)

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(event, colIndex, rowIndex);
                        }}
                    >
                        {col}
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
