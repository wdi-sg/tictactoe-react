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
        clicked: false
      }
      this.counter = 0
    }


    squareClick(ev, rowIndex, colIndex){

        if(this.state.clicked = false) {

            let symbol = this.counter % 2 === 0 ? "X" : "O";
            this.state.board[rowIndex][colIndex] = symbol;
            this.state.clicked = true;
            this.setState({board:this.state.board});
            this.setState({clicked:this.state.clicked});
            console.log(this.state.board)
            console.log(this.state.clicked)
            this.counter ++;
        }
    }



    render() {

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <button type="checkbox"
                        className="boo"
                        key={colIndex}
                        onClick={(ev)=>{
                            this.squareClick(ev, rowIndex,colIndex);
                        }}

                    >
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