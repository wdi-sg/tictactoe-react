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
        counter: 1

      }

    }

    squareClick(something, something2){
      if (this.state.board[something][something2] == null) {
          if (this.state.counter % 2 == 0) {
            this.state.board[something][something2]= 'o'
          } else {
            this.state.board[something][something2]= 'x'
          }
          this.state.counter ++
     
          console.log( something, something2 );
          console.log(this.state)
          this.setState({board: this.state.board})
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
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex, colIndex);
                        }}

                    >
                    {rowIndex} : {colIndex} : {this.state.board[rowIndex][colIndex]}
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
