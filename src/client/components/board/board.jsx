import React from 'react';
import styles from './style.scss';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ],
        turn: true
      }

    }

    squareClick(col, row){
        let newBoard = this.state.board;
        if (newBoard[row][col] === null) {
          newBoard[row][col] = this.state.turn ? "X" : "O";
          let newTurn = !this.state.turn;
          this.setState({board: newBoard, turn: newTurn});
          this.checkWin();
        }
    }

    checkWin() {
      let checkStr = this.state.board.toString();
      if (/XXX|X...X...X|X....X....X|X..X..X|X.X.X/.test(checkStr)) {
        setTimeout(()=>{alert("player X wins")}, 100);
      } else if (/OOO|O...O...O|O....O....O|..O..O..O|O.O.O/.test(checkStr)) {
        setTimeout(()=>{alert("player O wins")}, 100);
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
                        className={styles.boo}
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {col}
                    </p>
            );

          });

          // return the complete row
          return (
            <div key={rowIndex} className={styles.row}>
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
