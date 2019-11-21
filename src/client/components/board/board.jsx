import React from 'react';

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

    squareClick(rowIndex, colIndex){
        console.log( rowIndex, colIndex );

        var currentValue = 0;

        if(this.state.counter === undefined) {
            currentValue = 0;
        } else {
            currentValue = this.state.counter + 1;
        }

        console.log("clicking", currentValue);
        console.log("Board", this.state.board[rowIndex][colIndex]);

        this.setState({counter: currentValue});

        if(currentValue % 2 === 0) {
            this.state.board[rowIndex][colIndex] = "X";
        } else {
            this.state.board[rowIndex][colIndex] = "O";
        }
    }

    render() {
        console.log("board", this.state.board);

        // const data = {test: this.state.counter};

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <button
                        type="checkbox"
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex, colIndex);
                        }}

                    >
                        {/*{col} : {rowIndex} : {colIndex}*/}
                        {this.state.board[rowIndex][colIndex]}
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
