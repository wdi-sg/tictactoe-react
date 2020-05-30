import React from 'react';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['','',''],
          ['','',''],
          ['','','']
        ]
      }

    }

    squareClick(event, colIndex, rowIndex){
        console.log("event is: " + event);
        console.log( "column and Index is: " + colIndex + "," + rowIndex );

        let newBoard = this.state.board
        newBoard[rowIndex][colIndex] = "X"

        this.setState({
            board: newBoard
        })
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
                            this.squareClick(event, colIndex, rowIndex);
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
