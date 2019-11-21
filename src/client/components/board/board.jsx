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
        player: 'x',
        message: 'Game Start'

      }

    }

    squareClick(something, something2){
      if (this.state.board[something][something2] == null) {
          if (this.state.counter % 2 == 0) {
            this.state.board[something][something2]= 'o'
            this.state.player = 'x'
          } else {
            this.state.board[something][something2]= 'x'
            this.state.player = 'o'
          }
          this.state.counter ++
          // players turn display
          this.state.message = "Player " + this.state.player + " turn"
     
          console.log( something, something2 );
          console.log(this.state)
          this.setState({board: this.state.board})
          // check for winning grouping
          
          // if no winners and game has played all places tied
          if (this.state.counter == 10) {
            // display tied game
            this.state.message = "Tied Game"
          }

      }
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
                            this.squareClick(rowIndex, colIndex);
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
          </div>
        );
    }
}

export default Board;
