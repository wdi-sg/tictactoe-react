class Game extends React.Component {
    constructor() {
        super()
        this.game = 1;
        this.state = {
            game: this.game
        };
        this.reset = false;
    }

    resetGame() {
        this.game ++;
        let currentGame = { //currentGame === this.state
            game : this.game
        };
        this.reset = true;
        this.setState(currentGame);
    }

    createBoard() {

    }

    render() {
        return (
            <div>
                <p>Game #: {this.state.game}</p>

                <button onClick={(event) => {
                    this.resetGame(event);
                }}>Reset Game</button>

                <Board reset={this.reset}/>
            </div>
        )
    }
}

class Board extends React.Component {
    constructor(){

      super()

      this.state = {
        board: [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ],
        winner: null
      }
      this.turn = 'o';
      this.score = 0;
    }

    squareClick(col, row, event){

        if (this.turn === 'o') {
            this.state.board[row][col] = 'o'
            this.turn = 'x';
        } else {
            this.state.board[row][col] = 'x'
            this.turn = 'o';
        }

        let winner = null;
        let loser = null;
        let rows = this.state.board.length;
        let columns = this.state.board[0].length;
        let board = this.state.board;

        for (let i=0; i<rows; i++) {
            if (board[i][0] === board[i][0+1] && board[i][0+1] === board[i][0+2] && board[i][0] !== null) {
                loser = this.turn;
            }
        }
        for (let j=0; j<columns; j++) {
            if (board[0][j] === board[0+1][j] && board[0+1][j] === board[0+2][j] && board[0][j] !== null) {
                loser = this.turn;
            }
        }

        if (board[0][0] === board[1][1] && board[1][1] === board[2][2]){
            loser = this.turn;
        } else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]){
            loser = this.turn;
        }

        if (loser !== null) {
            if (loser === 'x') {
                winner = 'o'
            } else if (loser === 'o') {
                winner = 'x'
            }
            this.score++;
        }

        console.log('winner', winner)
        console.log('loser', loser)
        this.state.winner = winner;
        this.setState(this.state);
    }

    render() {
        console.log("board", this.state.board);

        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {

            // make each column
            return (
                    <p
                        className="boo"
                        key={colIndex}
                        onClick={(event)=>{
                            this.squareClick(colIndex, rowIndex, event);
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
            <p>Winner: {this.state.winner}</p>
            {board}
          </div>
        );
    }
}

ReactDOM.render(
    // <Board/>,
    <Game/>,
    document.getElementById('root')
);