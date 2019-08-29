class Board extends React.Component {
    constructor(){

      super();
    }
      state = {
        board: [
          [null,null,null],
          [null,null,null],
          [null,null,null]
        ],
        currentPlayer: "",
        turn: 1,
        gameEnd: false
      };

    squareClick(row, col){
        console.log("clicked square" );
        //check status of game
        if(!this.state.gameEnd) {
            console.log("end "+this.state.gameEnd);
            //if square not yet clicked
            if(this.state.board[row][col] === null) {
                //check whose turn, assign the square a value corresponding to player ``
                if(this.state.turn % 2 === 0) {
                    this.state.board[row][col] = 1;
                    console.log("move "+this.state.board[row][col]);
                    //this.state.currentPlayer = "o";
                } else {
                    this.state.board[row][col] = -1;
                    //this.state.currentPlayer = "x"
                }

                this.setState({turn: this.state.turn + 1});
                console.log("turn "+this.state.turn);

                //trigger check for winner
                if (this.state.turn >= 3){
                    if(this.checkGame()) {
                        this.setState({gameEnd: true});
                    } else {
                        if (this.state.turn === 9) {
                            this.setState({gameEnd: true});
                        }
                    }
                }
            }
        }
        //if player 1, X
        //this.state.board[rowIndex][colIndex]= "X"
        //else player 2, O
        //console.log(this.state.board);
        //this.setState(this.state.board);
    }

    checkGame(){
        let sum = 0;

        //check horizontal

        //check vertical

        //check diagonal

    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {
          // make a single row
          const rows = row.map( (col,colIndex) => {
            let move = "";
            if (col === 1) {
                move = "x";
            } else if (col === -1){
                move = "o";
            }
            // make each column
            return (
                    <p className="boo" key={colIndex} onClick={()=>{ this.squareClick(rowIndex, colIndex);}}>
                        {move}
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

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);