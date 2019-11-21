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

        counter: false
      }

    }

    squareClick(something, something2){

        let newBoard = this.state.board
        var clickX = "X"
        var clickO = "O"

        if (newBoard[something2][something] === null){
             newBoard[something2][something] = this.state.counter? clickX : clickO;
        } else {
            alert ("Hey, that's taken!")
        }


        console.log( something2, something );

        let newValues = {
            board: newBoard,
            counter: !this.state.counter
        }

        this.setState(newValues)

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
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {col}
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
          <div className="item">
            {board}
          </div>
        );
    }
}

export default Board;