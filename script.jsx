class Board extends React.Component {
    constructor(){
        super();
        // this.turnTaken = this.turnTaken.bind(this)
        this.state = {
            turn: 0,
            boardSize: 9,
            player1Moves: [],
            player2Moves: []
        }

        this.state.board = this.generateBoard();
    }

    generateBoard(){
        let board = [];
        for(let i = 0; i < this.state.boardSize; i++){
           board.push('')
        }
        return board;
    }


    checkWin(element) {
        var winPerm = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]
        ];

        for (let i=0; i < winPerm.length; i++) {
            if ((winPerm[i].every(element => this.state.player1Moves.includes(element)))=== true ) {
            console.log("playerOne Wins!");
            // setTimeout(function(){alert("Player 1 Won")},500);

            } else if ((winPerm[i].every(element => this.state.player2Moves.includes(element)))=== true ) {
                console.log("player2 Wins!");
                // setTimeout(function(){alert("Player 2 Won")},500);
            }
        }
    }


    squareClick(cellIndex){

        let currentBoard = this.state.board;

        let currentTurn = this.state.turn + 1;
        this.setState( { turn: currentTurn } );

        if (this.state.turn % 2 == 0 && currentBoard[cellIndex] == "") {
            currentBoard[cellIndex] = "X";
            this.setState ( {board: currentBoard});
            // this.state.player1Moves.push(event.target.id);
            this.setState ( {player1Moves: event.target.id});

            this.checkWin();

            console.log("player 1 array");
            console.log(this.state.player1Moves);
        }
        else {
            currentBoard[cellIndex] = "O";
            this.setState ( {board: currentBoard});
            // this.state.player2Moves.push(event.target.id);
            this.setState ( {player2Moves: event.target.id});

            this.checkWin();

            console.log("player 2 array")
            console.log(this.state.player2Moves)
        }


    }


    render() {
        console.log(this.state.board)

        let width = 1 / this.state.boardSize * 100;
        let height = 1 / this.state.boardSize * 100;
        const styles ={
            width: width + '%',
            height: height + '%'
        }


        const board = this.state.board.map((cell,cellIndex) => {
            return (
                <div
                    className="btn btn-outline-primary mb-2 pt-5 col-4"
                    key={cellIndex}
                    id={cellIndex + 1}
                    style={styles}
                    onClick={() => {
                        if (this.state.board[cellIndex]===''){
                            // this.turnTaken({ cellIndex: cellIndex })
                            this.squareClick(cellIndex);
                        } else {
                            alert('That cell is taken!')
                        }
                    }}>
                    {cell}
                </div>
            )
        });
        return (
            <div className="container mt-5 h-100">
                <div className="row">
                {board}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);




// class Board extends React.Component {
//     constructor(){

//       super()

//       this.state = {
//         board: [
//           ['i','i','i'],
//           ['i','i','i'],
//           ['i','i','i']
//         ],
//         turn: 0,
//       }

//     }

//     squareClick(row,col){
//         console.log( `${row}  ${col}` );

//         let currentBoard = this.state.board;

//         let currentTurn = this.state.turn + 1;
//         this.setState( { turn: currentTurn } );

//         if (this.state.turn % 2 == 0 && currentBoard[row][col] == "i") {
//             currentBoard[row][col] = "X"
//             this.setState ( {board: currentBoard})
//         }
//         else {
//             currentBoard[row][col] = "O"
//             this.setState ( {board: currentBoard})
//         }


//     }



//     render() {
//         console.log("board", this.state.board);

//         const board = this.state.board.map( (row,rowIndex) => {

//           // make a single row
//           const rows = row.map( (col,colIndex) => {

//             // make each column
//             return (
//                     <p
//                         className="col-4 boo"
//                         key={colIndex}
//                         onClick={()=>{
//                             this.squareClick(rowIndex, colIndex);
//                         }}

//                     >
//                         {col}
//                     </p>

//             );

//           });

//           // return the complete row
//           return (
//             <div key={rowIndex} className="row">
//               {rows}
//             </div>

//           );

//         });

//         return (
//           <div className="container">
//             {board}
//           </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Board/>,
//     document.getElementById('root')
// );