class Square extends React.Component{

}

class ScoreBoard extends React.Component{
    render(){
        console.log('hello');
        return{

        }
    }
}

class Board extends React.Component {
    constructor(){
    super()
    this.turn = 0;
    this.playerOneScore = 0;
    this.playerTwoScore = 0;

    this.state = {
        board: [
          ['-','-','-'],
          ['-','-','-'],
          ['-','-','-']
        ]
    }

    }

    clicker(event,colIndex,rowIndex){
        let eks = 'X';
        let ouu = 'O';
        let boardSize = this.state.board.length;
        // console.log(this.turn)
        if(this.turn%2 == 0 && this.state.board[colIndex][rowIndex] === '-'){

            this.state.board[colIndex][rowIndex] = eks;
            this.setState({board: this.state.board});

            this.turn++ ;

            this.checkWinState(this.turn,colIndex,rowIndex,eks,boardSize);
        } else if (this.turn%2 == 1 && this.state.board[colIndex][rowIndex] === '-'){

            this.state.board[colIndex][rowIndex] = ouu;
            this.setState({board: this.state.board});

            this.turn++ ;

            this.checkWinState(this.turn,colIndex,rowIndex,ouu,boardSize);
        }
    }

    checkWinState(turn,colIndex,rowIndex,playerSymbol,boardSize){
        let n = boardSize;
        console.log('checking...');
        // console.log(turn);
        // console.log(colIndex+ ' ' +rowIndex);
        // console.log(playerSymbol);
        //check col game win condition
        for(let i = 0; i < n ;i++){
            if(this.state.board[colIndex][i] !== playerSymbol)
                break;
            if (i === n-1){
                // console.log('somebody wins')
                alert(`${playerSymbol} won`);
                this.restartBoard();
            }
        }
        //check row game win condition
        for(let i = 0; i < n; i++){
            if(this.state.board[i][rowIndex] !== playerSymbol)
                break;
            if(i === n-1){
                alert(`${playerSymbol} won`);
                this.restartBoard();
            }
        }
        //check diag
        if(colIndex === rowIndex){
            for(let i = 0; i < n; i++){
                if(this.state.board[i][i] !== playerSymbol)
                    break;
                if(i == n-1){
                    alert(`${playerSymbol} won`);
                    this.restartBoard();
                }
            }
        }
        //check reverse diag
        if(colIndex+colIndex === n-1){
            for(let i = 0; i < n; i++){
                if(this.state.board[i][(n-1)-i] !== playerSymbol)
                    break;
                if(i == n-1){
                    alert(`${playerSymbol} won`);
                    this.restartBoard();
                }
            }
        }
        //check draw state
        if(turn == (Math.pow(n,2))){
            alert(`This is a DRAW`);
            this.restartBoard();
        }
    }

    restartBoard(){
        const boardTemplate = [
          ['-','-','-'],
          ['-','-','-'],
          ['-','-','-']
        ];

        this.setState({board: boardTemplate});
        this.turn = 0;
    }

    render() {
        console.log("board", this.state.board);
        //doing a nested loop
        const board = this.state.board.map( (row,rowIndex) => {

          // make a single row
          const rows = row.map( (col,colIndex) => {
            let startBox = ' ';
            // make each column
            return (
                    <button type="checkbox" className="box" key={colIndex} onClick={((ev)=> this.clicker(ev,colIndex, rowIndex))}>
                        {this.state.board[colIndex][rowIndex]}
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
            <div>
                Score Board
            </div>
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);