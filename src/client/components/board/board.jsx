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
        turn: 0,
        player: 'X'
      }
    }

    checkWinState() {
        let winState = [
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,0],[2,0]],
        [[1,0],[1,1],[2,1]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[2,0],[1,1],[0,2]]
        ]

        // for (let i=0; i<winState.length; i++) {
        //     for (let j=0; j<winState[i].length; j++) {
        //         const [[a,b],[c,d],[e,f]] = winState[i][j]

        //             if (this.state.board[a,b] === this.state.board[c,d] && this.state.board[c,d] === this.state.board[e,f]) {
        //                 alert('You won!')
        //             }
        //         }
        //     }
        // }
    }

    handleClick(colIndex, rowIndex){
        console.log( colIndex, rowIndex );

        let newBoard = this.state.board;
        let nextPlayer = this.state.player;
        let nextTurn = this.state.turn;

        if (this.state.board[rowIndex][colIndex] === null) {
            newBoard[rowIndex][colIndex] = this.state.player;
            nextTurn += 1;
            (nextPlayer === 'X') ? nextPlayer = 'O' : nextPlayer = 'X';
            this.checkWinState()
        }

        this.setState({
            board: newBoard,
            turn: nextTurn,
            player: nextPlayer
        })
    }

    render() {
        const board = this.state.board.map( (row, rowIndex) => {

          // make a single row
          const rows = row.map( (col, colIndex) => {

            // make each column
            return (
                    <button
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.handleClick(colIndex, rowIndex);
                        }}>
                        {col}
                    </button>
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