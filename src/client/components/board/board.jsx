import React from 'react';

let turns = 0;

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ]
      }

    }

    squareClick(something, something2){
        console.log( something, something2 );
        var playBoard = this.state.board;
        console.log(playBoard)
        console.log(playBoard[something][something2])
        if(turns%2==0)
            {
                playBoard[something2][something]= "X"
            }
        if(turns%2==1){
                playBoard[something2][something]= "O"
            }
            turns++;
        //console.log("clicking", currentValue);
        // set the state of this component
        console.log(this.state.board[something][something2]);
        //this.setState( { board[something][something2]: currentValue } );
        this.setState( { board: playBoard } );
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <div
                        //className="boo"
                        className="col-4 text-center pt-4 pb-4 my-auto border"
                        key={colIndex}

                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {col}

                    </div>
            );

          });

          // return the complete row
          return (
            <div key={rowIndex} className="row" style = {{height:"100px"}}>
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