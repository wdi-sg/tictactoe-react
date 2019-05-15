class Square extends React.Component{

}
class Score extends React.Component{
    constructor(){
        super()
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
    }
    render(){
        console.log('WHO WON?', this.props.winningPlayer)
        if(this.props.winningPlayer == 'X' && this.props.boardState){
            this.playerOneScore++;
        }else if(this.props.winningPlayer == 'O' && this.props.boardState){
            this.playerTwoScore++;
        }
        return (
            <div>
            <h3>Score Board</h3>
            <h4>Player One: {this.playerOneScore}</h4>
            <h4>Player Two:{this.playerTwoScore}</h4>
            </div>
        );
    }
}

//child of game class
class Board extends React.Component {

    constructor(){
        super();
        this.turn = 0;
        this.playerOneScore = 0;
        this.playerTwoScore = 0;
        this.winner = null;
        this.boardState = false;

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
        //conditions to allow onclick logic to change this.state.board
        if(this.turn%2 == 0 && this.state.board[colIndex][rowIndex] === '-'){

            this.state.board[colIndex][rowIndex] = eks;
            this.setState({board: this.state.board});

            this.turn++ ;

            this.boardState = this.checkWinState(this.turn,colIndex,rowIndex,eks,boardSize);
        } else if (this.turn%2 == 1 && this.state.board[colIndex][rowIndex] === '-'){

            this.state.board[colIndex][rowIndex] = ouu;
            this.setState({board: this.state.board});

            this.turn++ ;

            this.boardState = this.checkWinState(this.turn,colIndex,rowIndex,ouu,boardSize);
        }
        console.log(this.boardState);
        if(this.boardState){
            console.log('GAME WOULD RESTART NOW')
            this.restartBoard();
        }
    }

    checkWinState(turn,colIndex,rowIndex,playerSymbol,boardSize){
        let n = boardSize;
        console.log('checking...');

        for(let i = 0; i < n ;i++){
            if(this.state.board[colIndex][i] !== playerSymbol)
                break;
            if (i === n-1){
                // console.log('somebody wins')
                alert(`${playerSymbol} won`);
                this.winner = playerSymbol;
                return true;
            }
        }
        //check row game win condition
        for(let i = 0; i < n; i++){
            if(this.state.board[i][rowIndex] !== playerSymbol)
                break;
            if(i === n-1){
                alert(`${playerSymbol} won`);
                this.winner = playerSymbol;
                return true;
            }
        }
        //check diag
        if(colIndex === rowIndex){
            for(let i = 0; i < n; i++){
                if(this.state.board[i][i] !== playerSymbol)
                    break;
                if(i == n-1){
                    alert(`${playerSymbol} won`);
                    this.winner = playerSymbol;
                    return true;
                }
            }
        }
        //check reverse diag

        if(colIndex+rowIndex === n-1){
            for(let i = 0; i < n; i++){
                if(this.state.board[i][(n-1)-i] !== playerSymbol)
                    break;
                if(i == n-1){
                    alert(`${playerSymbol} won`);
                    this.winner = playerSymbol;
                    return true;
                }
            }
        }
        //check draw state
        if(turn == (Math.pow(n,2))){
            alert(`This is a DRAW`);
            return true;
        }

        return false;
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

        // console.log("board", this.state.board);
        //doing a nested loop, col and rows
        const board = this.state.board.map( (row,rowIndex) => {
          // make a single row
            const rows = row.map( (col,colIndex) => {
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
        console.log('at board', this.winner);
        console.log('at state', this.boardState);

        return (
          <div className="item">
            {board}
            <div>
                <Score turn={this.turn} winningPlayer={this.winner} boardState={this.boardState}/>
            </div>
          </div>
        );
    }
}
//parent
class Game extends React.Component{
    constructor(){
        super();
    }
    render(){


        return(
            <div className="game">
                <Board/>
            </div>

        );
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);