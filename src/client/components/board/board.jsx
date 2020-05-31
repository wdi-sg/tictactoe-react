import React from 'react';

class Board extends React.Component {
    constructor() {

        super()

        this.state = {
            board: [
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ]
        }

    }



    squareClick(event, colIndex) {
        console.log(event + "event");
        console.log(colIndex + "colIndex");

        var currentValue;

        if (this.state.counter === undefined) {
            currentValue = 0;

        } else {
            currentValue = this.state.counter + 1;

        }
        console.log("Board", this.state.board[event][colIndex]);
        this.setState({ counter: currentValue });




        console.log(this.state.board)

        console.log(event, colIndex);
        console.log(this.state.counter);


        if (currentValue % 2 === 0) {
            this.state.board[event][colIndex] = "X";
            this.btn.setAttribute("disabled", "disabled");


        } else {
            this.state.board[event][colIndex] = "O";
            this.btn.setAttribute("disabled", "disabled");
        }
    }

    render() {

        console.log("board", this.state.board);

        const board = this.state.board.map((row, rowIndex) => {

            // make a single row
            const rows = row.map((col, colIndex) => {

                // make each column
                return (


                    <button ref="btn"  type ="checkbox"
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(rowIndex, colIndex);
                        }}

                    >
                      {/*  {col} : {rowIndex} : {colIndex} */}
                      {/* <p>{this.state.counter}</p> */}
                    <h1> {col}</h1>
                    {/*  {this.state.board[rowIndex][colIndex]}*/}
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