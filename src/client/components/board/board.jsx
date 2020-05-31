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

    handleClick(colIndex, rowIndex){
        console.log( colIndex, rowIndex );

        let newBoard = this.state.board;
        let nextPlayer = this.state.player;
        let nextTurn = this.state.turn;

        if (this.state.board[rowIndex][colIndex] === null) {
            newBoard[rowIndex][colIndex] = this.state.player;
            nextTurn += 1;
            (nextPlayer === 'X') ? nextPlayer = 'O' : nextPlayer = 'X';
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