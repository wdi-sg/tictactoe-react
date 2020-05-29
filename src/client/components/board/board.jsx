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
        status: "Click on any box to start",
        playerOneScore: 0,
        playerTwoScore: 0
      }

    }

    resetClick(){
        let happyBoard = this.state.board
              const resetBoard2=()=>{
            console.log("Right here")
            happyBoard.forEach((row, rowIndex)=>{row.map((column,columnIndex)=>{console.log(happyBoard[rowIndex][columnIndex]); happyBoard[rowIndex][columnIndex]="i";})})
            //console.log(playBoard);
            this.setState( { board: happyBoard } );
            this.setState( { playerOneScore: 0 } );
            this.setState( { playerTwoScore: 0 } );
            this.setState( { status: "Click on any box to start" } );
        }
        console.log("yoyoyoyoyoyoy");
        resetBoard2();
    }
    threeClick(){
         //alert("fourchan");
         let threeBoard = [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ]
                    this.setState( { board: threeBoard } );
            this.setState( { playerOneScore: 0 } );
            this.setState( { playerTwoScore: 0 } );
            this.setState( { status: "Click on any box to start" } );
    }

    fourClick(){
         //alert("fourchan");
         let fourBoard = [
          ['i','i','i', 'i'],
          ['i','i','i', 'i'],
          ['i','i','i', 'i'],
          ['i','i','i', 'i']
        ]
                    this.setState( { board: fourBoard } );
            this.setState( { playerOneScore: 0 } );
            this.setState( { playerTwoScore: 0 } );
            this.setState( { status: "Click on any box to start" } );
    }

    fiveClick(){
         //alert("fourchan");
         let fiveBoard = [
            ['i','i','i', 'i', 'i'],
            ['i','i','i', 'i', 'i'],
            ['i','i','i', 'i', 'i'],
            ['i','i','i', 'i', 'i'],
            ['i','i','i', 'i', 'i']
        ]
                    this.setState( { board: fiveBoard } );
            this.setState( { playerOneScore: 0 } );
            this.setState( { playerTwoScore: 0 } );
            this.setState( { status: "Click on any box to start" } );
    }

    sixClick(){
         //alert("fourchan");
         let sixBoard = [
            ['i','i','i', 'i', 'i', 'i'],
            ['i','i','i', 'i', 'i', 'i'],
            ['i','i','i', 'i', 'i', 'i'],
            ['i','i','i', 'i', 'i', 'i'],
            ['i','i','i', 'i', 'i', 'i'],
            ['i','i','i', 'i', 'i', 'i']
        ]
                    this.setState( { board: sixBoard } );
            this.setState( { playerOneScore: 0 } );
            this.setState( { playerTwoScore: 0 } );
            this.setState( { status: "Click on any box to start" } );
    }
    squareClick(something, something2){

        //console.log( something, something2 );
        var playBoard = this.state.board;
        //console.log(playBoard);
        //console.log(playBoard[something][something2]);
        let boardWidth = this.state.board.length;
        let winningStreak= 'X'.repeat(boardWidth);
        let losingStreak= 'O'.repeat(boardWidth);
        //console.log(winningStreak);

        const resetBoard=()=>{
            console.log("Right here")
            playBoard.forEach((row, rowIndex)=>{row.map((column,columnIndex)=>{console.log(playBoard[rowIndex][columnIndex]); playBoard[rowIndex][columnIndex]="i";})})
            //console.log(playBoard);
            this.setState( { board: playBoard } );
        }
        const checkDraw=(board)=>{
            console.log("Right here")
            let drawCount=0;
            playBoard.forEach((row, rowIndex)=>{row.forEach((column,columnIndex)=>{ if(playBoard[rowIndex][columnIndex]!=="i"){
                drawCount++;
            }})})
            if(drawCount===Math.pow(board.length, 2))
            {
                resetBoard();
                turns = 0;
            }

        }

        function transpose(a) {
            return Object.keys(a[0]).map(function(c) {
                return a.map(function(r) { return r[c]; });
            });
        }

        const playerOneScoreIncrease=(()=>{
                               resetBoard();
                turns =0;
                console.log(this.state.playerOneScore)
                let currentWinScore = this.state.playerOneScore ;
                currentWinScore++;
                console.log(`The current win score is ${currentWinScore}`)
                this.setState({playerOneScore: currentWinScore});
                })

        const playerTwoScoreIncrease=(()=>{
                  resetBoard();
                    let currentLoseScore = this.state.playerTwoScore ;
                    currentLoseScore++;
                    console.log(`The current win score is ${currentLoseScore}`)
                    this.setState({playerTwoScore: currentLoseScore});

                    turns = 0;
                })

        const diagonalArrayCheck=(board=>{
            let diagonalArray=[]
            for(let diagonalCount = 0; diagonalCount < board.length; diagonalCount++)
            {
                diagonalArray.push(board[diagonalCount][diagonalCount]);
            }
            console.log(diagonalArray);
                        if(diagonalArray.join('')===winningStreak)
            {
                console.log("win liao");

                playerOneScoreIncrease();
                return;
            }
            if(diagonalArray.join('')===losingStreak)
                {
                    console.log("losingStreak liao");
                    playerTwoScoreIncrease();
                    return;
                }
        })


            const reverseDiagonalArrayCheck=(board=>{
            let diagonalArray=[]
            for(let diagonalCount = 0; diagonalCount < board.length; diagonalCount++)
            {
                diagonalArray.push(board[diagonalCount][board.length-1-diagonalCount]);
            }
            console.log(diagonalArray);
                        if(diagonalArray.join('')===winningStreak)
            {
                console.log("win liao");
                playerOneScoreIncrease();
                return;
            }
            if(diagonalArray.join('')===losingStreak)
                {
                    console.log("losingStreak liao");
                   playerTwoScoreIncrease();
                    return;
                }
        })

        function checkHorizontal(board)
        {
                board.forEach(row=>{
                            console.log(row.join(''));
                            if(row.join('')===winningStreak)
                            {
                                console.log("win liao");
                                 playerOneScoreIncrease();
                                return;
                            }
                            if(row.join('')===losingStreak)
                                {
                                    console.log("losingStreak liao");
                                    playerTwoScoreIncrease();
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

                                diagonalArrayCheck(playBoard);
                                reverseDiagonalArrayCheck(playBoard);
                                checkDraw(playBoard);


                                };

        const computerMove = () =>{
            console.log("I am computer")
            console.log(Math.floor(Math.random()*playBoard.length));
            for(;;)
            {
                let xCoordinate = Math.floor(Math.random()*playBoard.length);
                let yCoordinate = Math.floor(Math.random()*playBoard.length);
                if(playBoard[xCoordinate][yCoordinate]==="i")
                {
                    console.log("xCoordinate is"+xCoordinate);
                    console.log("yCoordinate is"+yCoordinate);
                    playBoard[xCoordinate][yCoordinate]= "O";
                    this.setState( { board: playBoard } );
                    checkWinningState();
                    break;
                }
            }
        }

        if(playBoard[something2][something] === "i")
        {
        if(turns%2==0)
            {
                playBoard[something2][something]= "X"
                turns += 2;
                this.setState( { status: "Player 2 turn" } );
                this.setState( { board: playBoard } );
                checkWinningState();
                computerMove();
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
        let boxWidthClass="";
        if(this.state.board.length===3)
            {
                console.log("status quo")
                boxWidthClass = "col-4 text-center pt-4 pb-4 my-auto border"
            }
        else
        if(this.state.board.length===4)
          {
                console.log("status quo")
                boxWidthClass = "col-3 text-center pt-4 pb-4 my-auto border"
            }
                    else
        if(this.state.board.length===5 ||this.state.board.length===6)
          {
                console.log("status quo")
                boxWidthClass = "col-2 text-center pt-4 pb-4 my-auto border"
            }


        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <div
                        //className="boo"

                        className={boxWidthClass}

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
                    <p>Status: {this.state.status} &nbsp; Player 1 Score: {this.state.playerOneScore}  &nbsp; Player 2 Score: {this.state.playerTwoScore}</p>
                </div>
            </div>
          <div className="item">
            {board}
          </div>
            <button onClick={()=>{this.resetClick()}}>Reset</button>
            <button onClick={()=>{this.threeClick()}}>Three Chan</button>
            <button onClick={()=>{this.fourClick()}}>Four Chan</button>
            <button onClick={()=>{this.fiveClick()}}>Five Chan</button>
            <button onClick={()=>{this.sixClick()}}>Six Chan</button>
          </div>
        );
    }
}

export default Board;