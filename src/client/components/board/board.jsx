import React from 'react';
import styles from './style.scss'
import { hot } from 'react-hot-loader';


  
class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ],
        player: false,
        win: false,
        winner: null

      }

    }

  

    squareClick(i, j){
      console.log(this.state.player)
      let changeBoard = this.state.board;
      changeBoard[i][j] = this.state.player ? "X" : "O";
      console.log(changeBoard)
      console.log(i, j)
      this.setState({board: changeBoard, player: !this.state.player})

      
      for(let i = 0; i < changeBoard.length; i++) {
       if(changeBoard[i][0] !== null || changeBoard[i][1] !==null || changeBoard[i][2] !== null ) {

        if(changeBoard[i][0] === changeBoard[i][1] && changeBoard[i][0] === changeBoard[i][2]) {
          alert("ROW")
        } 
        if(changeBoard[i][i] === changeBoard[i + 1][i + 1] && changeBoard[i][i] === changeBoard[i + 2][i + 2]) {
          alert("DIAGONAL")
        }
        for (let j = 0; j < 3; j++) {
          // Checking the Columns for a Win
          if(changeBoard[0][j] !== null || changeBoard[1][j] !==null || changeBoard[2][j] !== null  ) {
            if (changeBoard[i][j] ===changeBoard[i + 1][j] &&changeBoard[i][j] ===changeBoard[i + 2][j]) {
              alert("COLUMN")
          }
          }
    
        }
       }
          
        
      }
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
                     <p>{col} </p>
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



