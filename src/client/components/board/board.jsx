import React from 'react';
import styles from './style.scss';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        player: 0
      }

    }

    // let tictac = {
    //     if (player) {
    //         return "x";
    //     } else {
    //         return "o";
    //     }
    // }

    squareClick(i, j){
        console.log( i, j );
        if (this.state.player) {
            this.state.board[i][j] = 'x';
            this.state.player += 1;
        } else {
            this.state.board[i][j] = 'o';
            this.state.player -= 1;
        }
        console.log(this.state.board);
        this.setState( {
            board: this.state.board
        } )
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <div className="col border text-center boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {this.state.board[colIndex][rowIndex]}
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
          </div>
        );
    }
}

export default Board;