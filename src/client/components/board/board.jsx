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
        counter: 1,
        player: 'X',
        message: 'Game Start',
        play: true

      }

    }

    squareClick(something, something2){
      if (this.state.board[something][something2] === null) {
          if (this.state.counter % 2 === 0) {
            this.state.board[something][something2]= 'O'
            this.state.player = 'X'
          } else {
            this.state.board[something][something2]= 'X'
            this.state.player = 'O'
          }
          this.state.counter ++
          // players turn display
          this.state.message = "Player " + this.state.player + " turn"
     
          console.log( something, something2 );
          console.log(this.state)
          this.setState({board: this.state.board})
          // if no winners and game has played all places tied
          if (this.state.counter === 10) {
            // display tied game
            this.state.message = "Tied Game"
          }
          // check for winning grouping (thank you terence)
          const checkStr = this.state.board.join('');
          
          console.log("sskssk")
          console.log(checkStr)
          if (/XXX|X...X....X|X....X....X|X..X..X|..X.X.X/.test(checkStr)) {
            this.state.message = "X Won!"
            this.state.play = false;
          }else if (/OOO|O...O....O|O....O....O|O..O..O|..O.O.O/.test(checkStr)) {
            this.state.message = "O Won!" 
            this.state.play = false;
          }

      }
    }

    render() {
        // console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                          if (this.state.play === true) {
                            this.squareClick(rowIndex, colIndex);}
                        }}

                    >
                    {rowIndex} : {colIndex} : {this.state.board[rowIndex][colIndex]}
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
          <div className="item"><h2>{this.state.message}</h2>
            {board}
            <button className="refresh" onClick={()=>{window.location.reload()}}><strong>Restart Game</strong></button>
          </div>
        );
    }
}

export default Board;
