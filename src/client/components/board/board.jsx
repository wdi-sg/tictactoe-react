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
            player: true
        }
    }

    squareClick(i,j){
        console.log( i, j );
        let changeBoard = this.state.board;
        changeBoard[i][j] = this.state.player? "X" : "O";
        this.setState({board:changeBoard,player:!this.state.player});
        console.log(this.state);
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <button type="checkbox" className="boo" key={colIndex} onClick={()=>{ this.squareClick(rowIndex,colIndex);}}>
                        {col}:{rowIndex}:{colIndex}
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