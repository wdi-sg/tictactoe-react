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

        player: false
      }

    }

    squareClick(something, something2){

        let newBoard = this.state.board
        var clickX = "X"
        var clickO = "O"

        if (newBoard[something2][something] === null){
             newBoard[something2][something] = this.state.player? clickX : clickO;
        } else {
            alert ("Hey, that's taken!")
        }


        console.log( something2, something );

        let newValues = {
            board: newBoard,
            player: !this.state.player
        }

        this.setState(newValues)

        let checkStr = this.state.board.toString();

    if (/XXX|X...X...X|X.....X.....X|X..X...X|X.X.X/.test(checkStr)) {
        let playerXwins = alert("Player X won!")
        setTimeout(playerXwins,5000) ;
      } else if (/OOO|O.....O.....O|O..O...O|O.O.O/.test(checkStr)) {
        let playerOwins = alert("Player O won!")
        setTimeout(playerOwins,5000);
      }

}








    render() {
        console.log("board", this.state.board);
         console.log("board string", this.state.board.toString());

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