class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      winner: undefined,
    };
    this.gameState = {
      turn: 'X',
      gameEnded: false,
      board: Array(9).fill(''),
      totalMoves: 0
    }
  }

  clicked(box) {
    if (this.gameState.gameEnded) return;

    if (this.gameState.board[box.dataset.square] == '') {
      this.gameState.board[box.dataset.square] = this.gameState.turn;
      box.innerText = this.gameState.turn;
      this.gameState.turn = this.gameState.turn == 'X' ? 'O' : 'X',
      this.gameState.totalMoves++;
    }

    var result = this.checkWinner();

    if (result =="X") {
      this.gameState.gameEnded = true;
      this.setState({
        winner: 'X',
        winnerLine: 'Winner is Player "X"'
      });
    } else if (result == "O") {
      this.gameState.gameEnded = true;      
      this.setState({
        winner: 'O',
        winnerLine: 'Winner is Player "O"'
      });
    } else if (result == 'draw') {
      this.gameState.gameEnded = true;      
      this.setState({
        winner: 'draw',
        winnerLine: 'Match is draw'
      });
    }
    
  }

  checkWinner() {
    var moves = [[0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6], [0,1,2], [3,4,5], [6,7,8]];
    var board = this.gameState.board;
    for (let i = 0; i<moves.length; i++) {
      if (board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]])
      return board[moves[i][0]];
    }

    console.log(this.gameState.totalMoves);
    if (this.gameState.totalMoves == 9) {
      return 'draw';
    }
  }

    render() {
       return (
         <div id="game">
           <div id="head">
             Tic Tac Toe Game
           </div>
           <div id="board" onClick={(e)=>this.clicked(e.target)}>
             <div className="square" data-square="0"></div>
             <div className="square" data-square="1"></div>
             <div className="square" data-square="2"></div>
             <div className="square" data-square="3"></div>
             <div className="square" data-square="4"></div>
             <div className="square" data-square="5"></div>
             <div className="square" data-square="6"></div>
             <div className="square" data-square="7"></div>
             <div className="square" data-square="8"></div>             
           </div>
           <div id="status">{this.state.winnerLine}</div>
         </div>
       )
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
