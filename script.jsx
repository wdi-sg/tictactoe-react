class Board extends React.Component {
    constructor(){

      super();

      this.state = {
        board: [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ],
        counter: 1
      };
    };

    resetGame(){
        const resetBoard = [
          ['i','i','i'],
          ['i','i','i'],
          ['i','i','i']
        ];
        this.setState({board: resetBoard});
        this.setState({counter: 1});
    }

    checkWin(x, y, s){
        console.log("starting check");
        let n = 3;
        console.log('row index', x)
        console.log('col index', y)
        console.log('symbol', s)

        let winOrnot = false;
        //check col
        // console.log(this.state.board)
        for(let i = 0; i < n; i++){
            if(this.state.board[x][i] !== s)
                break;
            if(i == 2){
                winOrnot = true;
            }
        };

        //check row
        for(let i = 0; i < n; i++){
            console.log("am i here")
            if(this.state.board[i][y] !== s)
                break;
            if (i == 2){
                winOrnot = true;
            }
        };

        //check diag
        if(x == y){
            //we're on a diagonal
            for(let i = 0; i < n; i++){
                if(this.state.board[i][i] != s)
                    break;
                if(i == n-1){
                    winOrnot = true;
                }
            }
        }

        //check anti diag (thanks rampion)
        if(x + y == n - 1){
            for(let i = 0; i < n; i++){
                if(this.state.board[i][(n-1)-i] != s)
                    break;
                if(i == n-1){
                    winOrnot = true;
                }
            }
        }
        //check draw
        if(this.state.counter == 9){
            alert('Game ends in a draw');
            this.resetGame();
        }
        console.log("winning conditions not met yet.");
        console.log('win status', winOrnot);
        return winOrnot;
    };

    newRound(){
        this.state.counter++;
        const newCount = this.state.counter;
        this.setState({counter: newCount});
    };

    squareClick(colIndex, rowIndex){
        const eks = '❌';
        const ohh = '⭕';
        const updatedBoard = this.state.board;
        const winningArrays = this.state.winningArrays;

        if (this.state.counter%2 == 1 && updatedBoard[rowIndex][colIndex] === "i"){
            console.log('X player');
            updatedBoard[rowIndex][colIndex] = eks;
            this.setState({ board: updatedBoard });
            if (this.checkWin(rowIndex, colIndex, eks) == true) {
                alert('You Win!');
                this.resetGame();
                return;
            };
            this.newRound();
        }
        else if (this.state.counter%2 == 0 && updatedBoard[rowIndex][colIndex] === "i"){
            console.log('O player');
            updatedBoard[rowIndex][colIndex] = ohh;
            this.setState({ board: updatedBoard });
            if (this.checkWin(rowIndex, colIndex, ohh) == true) {
                alert('You Win!');
                this.resetGame();
                return;
            };
            this.newRound();
        }
        else {
            alert("Please select an empty tile.")
        };
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
                        onClick={()=>{
                            this.squareClick(colIndex, rowIndex);
                        }}
                    >
                        {col} : {rowIndex} : {colIndex}
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
            <h2 className="counter">Round: {this.state.counter}</h2>
            {board}
          </div>
        );
    }
};

ReactDOM.render(
    <div>
        <Board/>
    </div>,
    document.getElementById('root')
);