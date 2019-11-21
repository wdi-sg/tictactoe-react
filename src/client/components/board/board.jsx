import React from 'react';
import styles from './style.scss'

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        fpturn: true,
        fpScore: 0,
        spScore: 0,
      }
    }

    reset(){
        console.log("RESET")
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++){
                this.state.board[i][j] = 'i'
            }
        }

        this.setState( { fpturn: true } );
    }

    checkWin(){
        for (var i = 0; i < 3; i++){
            if(this.state.board[i][0] === this.state.board[i][1] && this.state.board[i][0] === this.state.board[i][2] && this.state.board[i][0] != 'i'){
                alert("winner")
                this.reset()
            }
        }

        //vertical
        for (var i = 0; i < 3; i++){
            if(this.state.board[0][i] === this.state.board[1][i] && this.state.board[0][i] === this.state.board[2][i] && this.state.board[0][i] != 'i'){
                alert("winner")
                this.reset()
            }
        }

        //Diagonal 1
        for (var i = 0; i < 1; i++){
            if(this.state.board[i][i] === this.state.board[i+1][i+1] && this.state.board[i][i] === this.state.board[i+2][i+2] && this.state.board[i][i] != 'i'){
                alert("winner")
                this.reset()
            }
        }

        //Diagonal 2
        for (var i = 0; i < 1; i++){
            if(this.state.board[i][i+2] === this.state.board[i+1][i+1] && this.state.board[i][i+2] === this.state.board[i+2][i] && this.state.board[i][i+2] != 'i'){
                alert("winner")
                this.reset()
            }
        }
    }

    squareClick(something, something2){
        console.log( something, something2 );
        console.log(this.state.board)
        var position = this.state.board[something2][something]
        var fpturn = this.state.fpturn
        if(fpturn && position === 'i'){
            fpturn = !fpturn
            this.state.board[something2][something] = "X"
            console.log("fpturn, X")
        } else if (!fpturn && position === 'i') {
            fpturn = !fpturn
            this.state.board[something2][something] = "O"
            console.log("fpturn, O")
        }



        this.setState( { fpturn: fpturn } );
        //horizontal
        this.checkWin();
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {
            if(col === 'i'){
                col = ''
            }
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
            <div className={styles.btnDiv}>
                <button onClick={()=>{this.reset()}} className={styles.btn}>Reset</button>
                <p>First player: {this.state.fpScore}</p>
                <p>Second player: {this.state.spScore}</p>
            </div>
          </div>
        );
    }
}

export default Board;