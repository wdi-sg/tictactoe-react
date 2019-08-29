class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [{status: false, value: " "},{status: false, value: " "},{status: false, value: " "}],
          [{status: false, value: " "},{status: false, value: " "},{status: false, value: " "}],
          [{status: false, value: " "},{status: false, value: " "},{status: false, value: " "}]
        ],
        player:  1,
        symbols: ['O','X'],
        win: false,
        counter: 0,
        score: [0,0]
      }
    }

    checkboard(newState,coordinates) {
        let inputX = parseInt(coordinates[0]);
        let inputY = parseInt(coordinates[1]);
        let board = newState.board;
        let input = board[inputX][inputY].value

        // check horizontal
        if (inputX === 1) {
            if (board[inputX-1][inputY].value === input && board[inputX+1][inputY].value === input){
                return true;
            }
        } else if (inputX === 0) {
            if (board[inputX+1][inputY].value === input && board[inputX+2][inputY].value === input) {
                return true;
            }
        } else {
            if (board[inputX-1][inputY].value === input && board[inputX-2][inputY].value === input) {
                return true;
            }
        }

        // check vertical
        if (inputY === 1) {
            if (board[inputX][inputY-1].value === input && board[inputX][inputY+1].value === input){
                return true;
            }
        } else if (inputY === 0) {
            if (board[inputX][inputY+1].value === input && board[inputX][inputY+2].value === input) {
                return true;
            }
        } else {
            if (board[inputX][inputY-1].value === input && board[inputX][inputY-2].value === input) {
                return true;
            }
        }

        //check diagonal
        if (board[0][0].value === input && board[1][1].value === input && board[2][2].value === input) {
            return true;
        }

        if (board[2][0].value === input && board[1][1].value === input && board[0][2].value === input) {
            return true;
        }

        return false;
    }

    resetBoard(){
        let newState = {
                board: [
                  [{status: false, value: " "},{status: false, value: " "},{status: false, value: " "}],
                  [{status: false, value: " "},{status: false, value: " "},{status: false, value: " "}],
                  [{status: false, value: " "},{status: false, value: " "},{status: false, value: " "}]
                ],
                player:  1,
                symbols: ['O','X'],
                win: false,
                reset: false,
                counter: 0,
                score: this.state.score
        }

        this.setState(newState);
    }

    squareClick(event){
        if (!this.state.win && !this.state.reset) {
            let target = event.target.id;
            let coordinates = target.split("");
            let newState = this.state
            let box = newState.board[parseInt(coordinates[0])][parseInt(coordinates[1])];
            newState.counter ++;

            if (!box.status) {
                box.status = true;
                box.value = newState.symbols[newState.player-1];

                newState.win = this.checkboard(newState,coordinates)

                newState.win ? newState.score[newState.player-1]++ : null;

                if (newState.win || newState.counter == 9){
                    newState.reset =  true;
                }

                newState.player === 1 ? newState.player = 2 : newState.player = 1;

                this.setState(newState);
            }
        }
    }

    render() {
        const board = this.state.board.map( (col,colIndex) => {

          // make a single row
          const cols = col.map( (row,rowIndex) => {

            // make each column
            return (
                    <p className={"game-box"} key={rowIndex} id={`${rowIndex}${colIndex}`} onClick={(event)=>{this.squareClick(event);}}>
                        {this.state.board[rowIndex][colIndex].value}
                    </p>
            );

          });

          // return the complete row
          return (
            <div key={colIndex} className={"board-column"}>
              {cols}
            </div>

          );

        });

        if (this.state.win === false) {
            if (this.state.player === 1) {

            }

        }

        return (
        <React.Fragment>
            <div className={"col-3 my-3 player-board"}>
                <h3>Player 1</h3>
                <h1>{this.state.symbols[0]}</h1>
                <h3>Game score: {this.state.score[0]}</h3>
            </div>
            <div className={"col-6 my-3 main-board"}>
                {this.state.win ? (this.state.player === 1 ? <h2>Player 2 Won</h2> : <h2>Player 1 Won</h2>) : (this.state.reset ? <h2> Draw Game </h2> : (this.state.player === 1 ? <h2>Player 1's Turn</h2> : <h2>Player 2's Turn</h2>))}
                {board}
                {this.state.reset ? <div className="reset-btn"><button className={"btn btn-dark"} onClick={()=>{this.resetBoard()}}>Reset Game</button></div> : null}
            </div>
            <div className={"col-3 my-3 player-board"}>
                <h3>Player 2</h3>
                <h1>{this.state.symbols[1]}</h1>
                <h3>Game score: {this.state.score[1]}</h3>
            </div>
        </React.Fragment>
        );
    }
}

ReactDOM.render(
    <div className={'row'}>
        <Board/>
    </div>,
    document.getElementById('root')
);
