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

    squareClick(something, something2){
        console.log( something, something2 );
        var updatedBoard = this.state.board;
        updatedBoard[something2][something] = 'X'; 
      
        // this.state.board[something2][something] = 'X';
        console.log(updatedBoard);
        this.setState({board: updatedBoard});

    }
    

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            if (col === 'i') {
              console.log('ITS I')
            }
            else {
              console.log("its been clicked before")
            }; 

            // make each column
            return (
                    <span
                        className="boo"
                        key={colIndex}
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}

                    >
                        {col} : {colIndex} : {rowIndex} | 
                     </span>
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
