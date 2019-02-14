class Board extends React.Component {
  constructor() {
    super()

    this.playerOne = {
      symbol: 'O'
    }

    this.playerTwo = {
      symbol: 'X'
    }

    this.state = {
      board: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ],
      currentPlayer: this.playerOne 
    }

  }

  squareClick(colIndex, rowIndex) {
    console.log("colIndex: " + colIndex,"rowIndex: " + rowIndex);
    if (this.state.board[rowIndex][colIndex] == ' ') {
      var newBoard = this.state.board;

      console.log("symbol: " + this.state.currentPlayer.symbol)
      newBoard[rowIndex][colIndex] = this.state.currentPlayer.symbol

      let nextPlayer;
      if (this.state.currentPlayer == this.playerOne) {
        nextPlayer = this.playerTwo;
      } else {
        nextPlayer = this.playerOne;
      }
      this.setState({
        board: newBoard,
        currentPlayer: nextPlayer
      })
    }
  }

  render() {
    console.log("board", this.state.board);

    const board = this.state.board.map((row, rowIndex) => {

      // make a single row
      const rows = row.map((col, colIndex) => {

        // make each column
        return (
          <p className="square" key={colIndex} 
            onClick={() => {
              this.squareClick(colIndex, rowIndex);
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
        {board}
      </div>
    );
  }
}

class Game extends React.Component {
  render () {
    return (
      <div id="board">
      <Board />
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
