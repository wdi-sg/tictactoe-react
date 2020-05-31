import React from 'react';
import Winmessage from './winmessage.jsx';
import styles from './Board.scss';

class Board extends React.Component {
  //Constructor for initial state - Set initial player and blank board
    constructor(){

      super()

      this.state = {
        boardSize: 3,
        board: this.generateBoard(3),
        player: "X",
        winmessage: "",
        winLength: 3
      }

    }

    generateBoard(size) {
      let board = []
      for (let i = 0; i < size; i++){
        let row = [];
        board.push(row)
        for (let j = 0; j < size; j++){
          board[i].push("i")
        }
      }
      return board
    }

    //Win condition
    someoneHasWon(){
      let matchCounterDiagonal = 0;
      let matchCounterReverseDiagonal = 0;
      let boardSize = this.state.boardSize;
      let winLength = this.state.winLength;

      for (let i = 0; i < boardSize; i++){
        let matchCounterRow = 0;
        let matchCounterColumn = 0;
        //Diagonals
        if (this.state.board[i][i] === this.state.player){
            matchCounterDiagonal++
        }
        if (this.state.board[boardSize - i - 1][i] === this.state.player){
            matchCounterReverseDiagonal++
        }
        //Rows and Columns
        for (let k = 0; k < boardSize; k++){
            if (this.state.board[i][k] === this.state.player){
                matchCounterRow++
            }
            if (this.state.board[k][i] === this.state.player){
                matchCounterColumn++
            }
        }
        //Check for matches
        if (matchCounterRow === winLength || matchCounterColumn === winLength ||matchCounterDiagonal === winLength ||matchCounterReverseDiagonal === winLength){
            return true
        }
    }

    }

    //Click Handler 
    squareClick(event, colIndex, rowIndex){
        console.log( colIndex, rowIndex );
        console.log(event.target);
        let updatedObj = this.state
        //Update board
        updatedObj.board[rowIndex][colIndex] = updatedObj.player
        //Check Win
        if (this.someoneHasWon()){
          console.log("win!")
          updatedObj.winmessage = "You win young fella"
        }
        //Player switch
        if (updatedObj.player === "X"){
          updatedObj.player = "O"
        } else {
          updatedObj.player = "X"
        }
        //Update state and re-render board
        this.setState(updatedObj)        
    }

    //Reset Game Click Handler
    resetClick(){
      let resetObj = {
        boardSize: this.state.boardSize + 1,
        board: this.generateBoard(this.state.boardSize + 1),
        player: "X",
        winmessage: "",
        winLength: this.state.winLength + 1
      }
      this.setState(resetObj)
    }

  //Render Board
    render() {
        console.log("board", this.state.board);
        console.log("boardSize", this.state.boardSize);
        console.log("winlength", this.state.winLength);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <button
                        type="checkbox"
                        className="hellomyfriend"
                        key={colIndex}
                        onClick={(ev)=>{
                            this.squareClick(ev, colIndex, rowIndex);
                        }}

                    >
                        {col} - {colIndex} : {rowIndex}
                    </button>
            );

          });

          // return the complete row
          return (
            <div key={rowIndex} className="hellomyfriend">
              {rows}
            </div>

          );

        });

        return (
          <div className={styles.item}>
            {board}
            <Winmessage message = {this.state.winmessage}/>
            <button onClick={()=>{this.resetClick()}}>Reset Game</button>
          </div>
        );
    }
}

export default Board;

