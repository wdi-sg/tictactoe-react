import React from 'react';

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          ['null','null','null'],
          ['null','null','null'],
          ['null','null','null']
        ],
        clicked: false
      };

    }

    squareClick(colIndex, rowIndex){
        this.setState({clicked:!this.state.clicked})
        console.log(colIndex, rowIndex);
        console.log( "button clicked!" );
        console.log(this.state.clicked);
    }

    render() {
        //console.log("board", this.state.board);
        let userInput = "";
        if (this.state.clicked === false) {
            userInput = "X";
        } else {
            userInput = "O";
        }
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
                        {userInput}
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