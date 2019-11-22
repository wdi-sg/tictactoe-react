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
        oScore: 0,
        count: 1
      }

    }

    refreshClick(){
        const refreshBoard = [
              [null,null,null],
              [null,null,null],
              [null,null,null]
            ]
        this.setState({
            board: refreshBoard
        });
        this.setState({ message: null })
        this.setState({count: 1})
    }

    newGame(){
        if (this.state.player === "X"){
            this.setState({ xScore: this.state.xScore + 1 });
        } else {
            this.setState({ oScore: this.state.oScore + 1 });
        }
        this.setState({ message: "Player "+ this.state.player + " won and scores 1 point! \n\nClick here to refresh the board" })
    }

    noWin(){
        this.setState({ message: "It's a draw! \n\nClick here to refresh the board" })
    }


    squareClick(row, column){
        console.log( this.state.player );
        let board = this.state.board
        let currentPlayer = this.state.player
        // Switch player from X to O and vis versa
        if (!board[row][column]){
            if(currentPlayer === "X"){
                this.setState({player: "O"})
            } else {
                this.setState({player: "X"})
            }
        // Add X or O to the board
            board[row][column] = currentPlayer
            this.setState({count: this.state.count + 1})
            console.log(this.state.count)
            this.setState({
              board: board
            })
        }



        // Check win state
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if (board[i][j] === "X" && board[i+1][j] === "X" && board[i+2][j] === "X" || board[i][j] === "O" && board[i+1][j] === "O" && board[i+2][j] === "O"){
                    this.newGame();
                }
                if (board[j][i] === "X" && board[j][i+1] === "X" && board[j][i+2] === "X" || board[j][i] === "O" && board[j][i+1] === "O" && board[j][i+2] === "O"){
                    this.newGame();
                }
                if (board[i][i] === "X" && board[i+1][i+1] === "X" && board[i+2][i+2] === "X" || board[i][i] === "O" && board[i+1][i+1] === "O" && board[i+2][i+2] === "O"){
                    this.newGame();
                }
                if (board[j][i+2] === "X" && board[j+1][i+1] === "X" && board[j+2][i] === "X" || board[j][i+2] === "O" && board[j+1][i+1] === "O" && board[j+2][i] === "O"){
                    this.newGame();
                }
                if (this.state.count === 9){
                    this.noWin();
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

        let win;
        if (this.state.message){
            win =   <button className="refresh" onClick={()=>{this.refreshClick()}}>
                        {this.state.message}
                    </button>
        } else {
            win = null
        }

        return (
          <div className="item">
            <h1>|Tic|Tac|Toe|</h1>
            <h1>Player Turn: {this.state.player}</h1>
            <div className="refreshBoard">
                {win}
            </div>
            <div className="scoreBoard">
                <h2 className="xScore">Player X Score: {this.state.xScore}</h2>
                <button className="refresh" onClick={()=>{window.location.reload()}}><strong>Refresh Scores</strong></button>
                <h2 className="oScore">Player O Score: {this.state.oScore}</h2>
            </div>
            <div className="board">
                {board}
            </div>
          </div>
        );
    }
}

export default Board;