import React from 'react';
import styles from './style.scss'
import { hot } from 'react-hot-loader';
class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        player: false
      }

    }

    squareClick(i, j){
      console.log(this.state.player)
      let changeBoard = this.state.board;
      changeBoard[i][j] = this.state.player ? "X" : "O";
      
      console.log(i, j)
        this.setState({board: changeBoard, player: !this.state.player})
    }

    render() {
      

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <div
                        className={styles.box}
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex, colIndex);
                        }}

                    >
                     {col} 
                    </div>
            );

          });

          // return the complete row
          return (
            <div key={rowIndex} className={styles.format}>
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
