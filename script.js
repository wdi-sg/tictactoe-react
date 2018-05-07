class Board extends React.Component {
    constructor(){
      super()
      this.clickHandler = this.clickHandler.bind( this );
      this.resetGame = this.resetGame.bind( this );
    }

    state = {
      turn: 'X',
      gameEnded: false,
      winner: '',
      board: ['','','','','','','','',''],
      totalMoves: 1,
      winningPlayer: ""
    }

    clickHandler(event){
      console.log(this.state.board);
      if (this.state.board[event.target.dataset.square] === '' && this.state.gameEnded === false){
        this.state.board[event.target.dataset.square] = this.state.turn;
        event.target.innerText = this.state.turn;
        this.setState({
          turn: this.state.turn === 'X' ? 'O' : 'X',
          board: this.state.board,
          totalMoves: this.state.totalMoves + 1
        })
      } else {
        alert("Invalid Move!")
      }
      var result = this.checkWinner();

      if(result === 'X') {
        this.setState({
          gameEnded: true,
          winner: 'X',
          winningPlayer: 'X'
        });
      } else if(result === 'O') {
        this.setState({
          gameEnded: true,
          winner: 'O',
          winningPlayer: 'O'
        });
      } else if(result === 'draw') {
        this.setState({
          gameEnded: true,
          winner: 'draw',
          winningPlayer: 'Draw'
        });
      }
    }

    checkWinner(){
      let moves = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      let board = this.state.board;

      for(let i=0; i<moves.length; i++) {
        if (board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]) {
          return board[moves[i][0]];
        } else if (this.state.totalMoves === 9 && board[moves[i][0]] === board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]) {
          return 'X';
        } else if (this.state.totalMoves === 9 && board[moves[i][0]] != board[moves[i][1]] && board[moves[i][1]] != board[moves[i][2]]) {
          return 'draw';
        }
      }
    }

    resetGame(){
      window.location.reload();
    }

    render() {
        return (
          <div id="game">
            <div id="head">
              <h1>Tic Tac Toe</h1>
              <p>powered by Reactjs</p>
            </div>

            <div id="board" onClick={this.clickHandler}>
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

            <h4>{this.state.winningPlayer}</h4>

            <button onClick={this.resetGame}>Restart</button>
          </div>
        )
        /*
        //console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            return (
                    <span>{col} : {rowIndex}</span>
            );

          });
          return (
            <div className="row">
              {rows}
            </div>

          );

        });

        return (
          <div className="item">
            {board}
          </div>
        );
        */
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
