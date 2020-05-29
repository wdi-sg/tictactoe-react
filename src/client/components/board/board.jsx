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
        ],
        status: "Click on any box to start"
      }

    }



    squareClick(something, something2){

        console.log( something, something2 );
        var playBoard = this.state.board;
        console.log(playBoard);
        console.log(playBoard[something][something2]);

        let winningStreak= 'X'.repeat(this.state.board.length);
        let losingStreak= 'O'.repeat(this.state.board.length);
        console.log(winningStreak);

        const resetBoard=()=>{
            console.log("Right here")
            playBoard.forEach((row, rowIndex)=>{row.map((column,columnIndex)=>{console.log(playBoard[rowIndex][columnIndex]); playBoard[rowIndex][columnIndex]="i";})})
            console.log(playBoard);
            this.setState( { board: playBoard } );
        }


        function transpose(a) {
            return Object.keys(a[0]).map(function(c) {
                return a.map(function(r) { return r[c]; });
            });
        }

        function checkHorizontal(board)
        {
                board.forEach(row=>{
                            console.log(row.join(''));
                            if(row.join('')===winningStreak)
                            {
                                console.log("win liao");
                                resetBoard();
                                turns =0;
                                return;
                            }
                            if(row.join('')===losingStreak)
                                {
                                    console.log("losingStreak liao");
                                    resetBoard();
                                    turns = 0;
                                    return;
                                }
                            })
        }

        const checkWinningState=()=>{
                                console.log("something something");
                                //This is for horizontal
                                // playBoard.forEach(row=>{
                                //                         console.log(row.join(''));
                                //                         if(row.join('')===winningStreak)
                                //                         {
                                //                             console.log("win liao");
                                //                             resetBoard();
                                //                             return;
                                //                         }
                                //                         if(row.join('')===losingStreak)
                                //                             {
                                //                                 console.log("losingStreak liao");
                                //                                 resetBoard();
                                //                                 return;
                                //                             }
                                //                         })
                                let transposedPlayBoard = transpose(playBoard);
                                console.log(transposedPlayBoard);
                                console.log(playBoard)
                                checkHorizontal(playBoard);
                                checkHorizontal(transposedPlayBoard);

                                };



        if(playBoard[something2][something] === "i")
        {
        if(turns%2==0)
            {
                playBoard[something2][something]= "X"
                turns++;
                this.setState( { status: "Player 2 turn" } );
                checkWinningState();
            }
        else
        if(turns%2==1){
                playBoard[something2][something]= "O"
                turns++;
                this.setState( { status: "Player 1 turn" } );
                checkWinningState();
            }
        }

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
        <div>
            <div className ="row">
                <div className = "col-12">
                    <p>Status: {this.state.status}</p>
                </div>
            </div>
          <div className="item">
            {board}
          </div>
          </div>
        );
    }
}

export default Board;