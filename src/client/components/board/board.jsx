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
      text: null,
      turn: 'UwU',
      playerOneScore: 0,
      playerTwoScore: 0,
      class: "box3 waves-effect btn-flat col s4",
      winlength:3
    }
  }

  play(){
    this.setState({
      turn: 'Player One\'s Turn'
    })
  }

  refresh(){
    if (this.state.turn != 'UwU') {
      if(this.state.board.length == 3) {
        this.setState({
          board: [
            [null,null,null],
            [null,null,null],
            [null,null,null]
          ],
          click: 0,
          text: null,
          turn: 'Player One\'s Turn'
        })
      }
      if(this.state.board.length == 4) {
        this.setState({
          board: [
            [null,null,null,null],
            [null,null,null,null],
            [null,null,null,null],
            [null,null,null,null]
          ],
          click: 0,
          text: null,
          turn: 'Player One\'s Turn'
        })
      }
      if(this.state.board.length == 5) {
        this.setState({
          board: [
            [null,null,null,null,null],
            [null,null,null,null,null],
            [null,null,null,null,null],
            [null,null,null,null,null],
            [null,null,null,null,null]
          ],
          click: 0,
          text: null,
          turn: 'Player One\'s Turn'
        })
      }
    }
  }

  squareClick(col,row){
    console.log(col,row);
    console.log(this.state.click)

    const length = this.state.board.length;
    const winlength = this.state.winlength
    const tempBoard = this.state.board
    const clickState = this.state.click
    let matchCount = 0;
    let xWin = this.state.playerOneScore;
    let oWin = this.state.playerTwoScore;

    //easy null check
    if (this.state.board[row][col] == null && this.state.turn != 'Game Ended!' && this.state.turn !='UwU'){

      if (this.state.click%2 == 0) {
        this.state.board[row][col] = 'X';
        this.state.turn = 'Player Two\'s Turn';
        checkX();
      } else {
        this.state.board[row][col] = 'O';
        this.state.turn = 'Player One\'s Turn';
        checkO();
      }

      let num = this.state.click + 1;
      if (this.state.click == length*length-1) {
        this.state.turn = 'Game Ended!'
        this.state.text = <div className='row border left-align' style={{padding: '7px 15px 8px 15px',width:'300px'}}>It's a draw!</div>
      }
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
          } else {
            matchCount=0;
          }
          wincheck();
        }
      }

      //check diagonal "/" win
      if (col+row == length-1) {
        for(let i=0; i<length; i++){
          if (tempBoard[i][length-1-i] == 'X') {
            matchCount++;
          }else {
            matchCount=0;
          }
          wincheck();
        }
      }

      //col win condition for x
      for(let i=0; i<length; i++){
        if (tempBoard[i][col] == 'X') {
          matchCount++;
        } else {
          matchCount=0;
        }
        wincheck();
      }


      //row win conditionn for x
      for(let i=0; i<length; i++){
        if (tempBoard[row][i] == 'X') {
          matchCount++;
        }else {
          matchCount=0;
        }
        wincheck();
      }

    }


    function checkO() {
      //check diagnoal "\" win
      if (col == row) {
        for(let i=0; i<length; i++){
          if (tempBoard[i][i] == 'O') {
            matchCount++;
          }else {
            matchCount=0;
          }
          wincheck();
        }

      }

      //check diagonal "/" win
      if (col+row == length-1) {
        for(let i=0; i<length; i++){
          if (tempBoard[i][length-1-i] == 'O') {
            matchCount++;
          }else {
            matchCount=0;
          }
          wincheck();
        }

      }

      //col win condition for o
      for(let i=0; i<length; i++){
        if (tempBoard[i][col] == 'O') {
          matchCount++;
        }else {
          matchCount=0;
        }
        wincheck();
      }


      //row win condition for o
      for(let i=0; i<length; i++){
        if (tempBoard[row][i] == 'O') {
          matchCount++;
        }else {
            matchCount=0;
          }
        wincheck();
      }
    }

    //combine x and o check, clickState even is X odd is O
    function wincheck (){
      if (matchCount == winlength) {
        if (clickState%2 == 0) {
          xWin ++;
        } else {
          oWin ++;
        }
        matchCount=0;
      }
    }

    if (xWin > this.state.playerOneScore) {
      this.setState( {
        playerOneScore: xWin,
        turn: 'Game Ended!',
        text: <div className='row border left-align' style={{padding: '7px 15px 8px 15px',width:'300px'}}>Congratulations Player One !</div>
      });
    }
    if (oWin > this.state.playerTwoScore) {
      this.setState( {
        playerTwoScore: oWin,
        turn: 'Game Ended!',
        text:  <div className='row border left-align' style={{padding: '7px 15px 8px 15px',width:'300px'}}>Congratulations Player Two !</div>
      });
    }
    console.log('end of click')
  }

  board3() {
    this.setState( {
      board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ],
      class: "box3 waves-effect btn-flat col s4"
    })
  }
  board4() {
    this.setState( {
      board: [
          [null,null,null,null],
          [null,null,null,null],
          [null,null,null,null],
          [null,null,null,null]
        ],
      class: "box4 waves-effect btn-flat col s3"
    })
  }
  board5() {
    this.setState( {
      board: [
          [null,null,null,null,null],
          [null,null,null,null,null],
          [null,null,null,null,null],
          [null,null,null,null,null],
          [null,null,null,null,null]
        ],
      class: "box5 waves-effect btn-flat col"
    })
  }
  win3() {
    console.log('3')
    this.setState( {
      winlength:3
    })
  }
  win4() {
    console.log('4')
    this.setState( {
      winlength:4
    })
  }
  win5() {
    console.log('5')
    this.setState( {
      winlength:5
    })
  }

  render() {
    console.log("board", this.state.board);

    const board = this.state.board.map( (row,rowIndex) => {

      // make a single row
      const rows = row.map( (col,colIndex) => {

        // make each column
        return (
          <button
            id="boardSize"
            className={this.state.class}
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
        <div key={rowIndex} className="boxrow row center">
          {rows}
        </div>
      );
    });

    return (
      <div className="container">
        <div className='row center-align' style={{marginTop:'20px', padding:'0 20px'}}>
          <div className='col s12 m3 border' style={{marginBottom:'5px'}}>
            <div className='turn'>{this.state.turn}</div>
          </div>
          <div className='col s12 m4 offset-m1 border' style={{marginBottom:'5px'}}>
            <div className='turn' style={{padding:'0'}}>
              <div className='col s6'>
                <button className='btn-flat' onClick={()=>{
                      this.play()}}>
                  <i className="material-icons small">play_arrow</i>
                </button>
              </div>
              <div className='col s6'>
                <button className='btn-flat' onClick={()=>{
                      this.refresh()}}>
                  <i className="material-icons small">refresh</i>
                </button>
              </div>
            </div>
          </div>

            <Button
            dropdown1={this.board3.bind(this)}
            dropdown2={this.board4.bind(this)}
            dropdown3={this.board5.bind(this)}
            dropdown4={this.win3.bind(this)}
            dropdown5={this.win4.bind(this)}
            dropdown6={this.win5.bind(this)}
            />

        </div>
        <div className='row' style={{padding:'0 20px'}}>
          <div className='col s12 m4 offset-m4'>
            <div className ='score row border'>
              <div>Scores</div>
              <div className='divider'></div>
              <div>Player One: {this.state.playerOneScore}</div>
              <div>Player Two: {this.state.playerTwoScore}</div>
              <div className='divider'></div>
              <div>Match {this.state.winlength} to win</div>
            </div>
          </div>
        </div>
        <div className='row'>
          {board}
        </div>
        <div className='row center' style={{marginTop:'20px'}}>
          {this.state.text}
        </div>
      </div>
    );
  }
}
//<Button greet={this.onBoardSize}/>
export default Board;