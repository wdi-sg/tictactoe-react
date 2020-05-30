import React from 'react';
import Button from './button.jsx';

class Board extends React.Component {

  constructor(){
    super()
    this.state = {
      board: [
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ],
      click: 0,
      win: ''
    }
  }

  squareClick(col,row){
    console.log(col,row);
    console.log(this.state.click)
    console.log("----------------------")

    const length = this.state.board.length;
    const tempBoard = this.state.board
    const clickState = this.state.click
    let matchCount = 0;
    let xWin = 0;
    let oWin = 0;

    //easy null check
    if (this.state.board[row][col] == null){
      console.log('this is null')

      if (this.state.click%2 == 0) {
        this.state.board[row][col] = 'X';
        checkX();
      } else {
        this.state.board[row][col] = 'O';
        checkO();
      }

      let num = this.state.click + 1;
      let updateObj = {
        click: num
      }
      this.setState(updateObj)
    }

    //col win condition


    function checkX() {
      //check diagnoal "\" win
      if (col == row) {
        for(let i=0; i<length; i++){
          if (tempBoard[i][i] == 'X') {
            matchCount++;
          }
        }
        wincheck();
      }

      //check diagonal "/" win
      if (col+row == 2) {
        for(let i=0; i<length; i++){
          if (tempBoard[i][2-i] == 'X') {
            matchCount++;
          }
        }
        wincheck();
      }

      //col win condition for x
      for(let i=0; i<length; i++){
        if (tempBoard[i][col] == 'X') {
          matchCount++;
        }
      }
      wincheck();

      //row win conditionn for x
      for(let i=0; i<length; i++){
        if (tempBoard[row][i] == 'X') {
          matchCount++;
        }
      }
      wincheck();
    }


    function checkO() {
      //check diagnoal "\" win
      if (col == row) {
        for(let i=0; i<length; i++){
          if (tempBoard[i][i] == 'O') {
            matchCount++;
          }
        }
        wincheck();
      }

      //check diagonal "/" win
      if (col+row == 2) {
        for(let i=0; i<length; i++){
          if (tempBoard[i][2-i] == 'O') {
            matchCount++;
          }
        }
        wincheck();
      }

      //col win condition for o
      for(let i=0; i<length; i++){
        if (tempBoard[i][col] == 'O') {
          matchCount++;
        }
      }
      wincheck();

      //row win condition for o
      for(let i=0; i<length; i++){
        if (tempBoard[row][i] == 'O') {
          matchCount++;
        }
      }
      wincheck();
    }

    //combine x and o check, clickState even is X odd is O
    function wincheck (){
      if (matchCount == 3) {
        if (clickState%2 == 0) {
          xWin = 1;
        } else {
          oWin =1;
        }
        return;
      }
      matchCount=0;
    }

    console.log('end of click')
    if (xWin == 1) {
      this.setState( { win: "Congratulations Player One !" } )
    }
    if (oWin == 1) {
      this.setState( { win: "Congratulations Player Two !" } )
    }
  }

  onBoardSize() {
    alert("Hello!");
  }

  render() {
    console.log("board", this.state.board);

    const board = this.state.board.map( (row,rowIndex) => {

      // make a single row
      const rows = row.map( (col,colIndex) => {

        // make each column
        return (
          <button
            className="box waves-effect btn-flat col s4"
            key={colIndex}
            onClick={()=>{
                this.squareClick(colIndex, rowIndex);
            }}
          >
              {this.state.board[rowIndex][colIndex]}
          </button>
        );
      });

      return (
        <div key={rowIndex} className="row">
          {rows}
        </div>
      );
    });

    return (
      <div className="container">
        <div className='row'>
          <div className='col-4-offset'>
            <Button dropdown={this.onBoardSize}/>
          </div>
        </div>
          {board}
        <div className='row'>
          <div>{this.state.win}</div>
        </div>
      </div>
    );
  }
}
//<Button greet={this.onBoardSize}/>
export default Board;