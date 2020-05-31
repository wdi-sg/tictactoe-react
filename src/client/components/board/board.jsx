import React from 'react';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ],
        turn: 0
      }

    }

    squareClick(colIndex, rowIndex){
        // console.log( something, something2 );
        let newBoard = this.state.board;
        let newTurn = this.state.turn;


        if (newTurn % 2 == 0){
            newBoard[rowIndex][colIndex] = 'X';
            newTurn += 1;
        } else {
            newBoard[rowIndex][colIndex] = 'O',
            newTurn -= 1;
        }

        this.setState({
          board: newBoard,
          turn: newTurn
        })

    }

    render() {

        // mapping over each row in the board
        const board = this.state.board.map( (row,rowIndex) => {

          // mapping over each column in a row
          const row_columns = row.map( (col,colIndex) => {

            // render each column
            return (
                    <span
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            // change state and change player
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {col}
                    </span>
            );

          });

          // render the complete row
          return (
            <div key={rowIndex} className="row">
              {row_columns}
            </div>

          );

        });

        // render the board
        return (
          <div className="item">
            {board}
          </div>
        );
    }
}

export default Board;
