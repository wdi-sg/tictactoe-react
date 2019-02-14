class Board extends React.Component {
  constructor() {
    super()

    this.playerOne = {
      symbol: 'O',
      computer: false
    }

    this.playerTwo = {
      symbol: 'X',
      computer: true
    }

    this.state = {
      board: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ],
      currentPlayer: this.playerOne,
      game: true
    }
  }

  cross(value) {
    return value == 'X';
  }

  circle(value) {
    return value == 'O';
  }

  victory() {
    let diagOne = [this.state.board[0][0], this.state.board[1][1], this.state.board[2][2]]
    let diagTwo = [this.state.board[0][2], this.state.board[1][1], this.state.board[2][0]]
    let horOne = [this.state.board[0][0], this.state.board[1][0], this.state.board[2][0]]
    let horTwo = [this.state.board[0][1], this.state.board[1][1], this.state.board[2][1]]
    let horThree = [this.state.board[0][2], this.state.board[1][2], this.state.board[2][2]]
    for (let i = 0; i < 3; ++i) {
      if (this.state.board[i].every(this.cross) == true || diagOne.every(this.cross) == true || 
      diagTwo.every(this.cross) == true || horOne.every(this.cross) || horTwo.every(this.cross) ||
      horThree.every(this.cross)) {
        this.setState({
          game: false
        })
        console.log('X Wins')
        // return true;
      } else if (this.state.board[i].every(this.circle) == true || diagOne.every(this.circle) == true || 
      diagTwo.every(this.circle) == true || horOne.every(this.circle) || horTwo.every(this.circle) ||
      horThree.every(this.circle)) {
        this.setState({
          game: false
        })
        console.log('O Wins')
        // return true;
      }
      // return false;
    }
  }

  reset() {
    this.setState({
      game: true
    })
  }

  squareClick(colIndex, rowIndex) {
    if (this.state.game == true) {
      if (this.state.board[rowIndex][colIndex] == ' ') {
        var newBoard = this.state.board;

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
  }

  render() {

    const board = this.state.board.map((row, rowIndex) => {

      // make a single row
      const rows = row.map((col, colIndex) => {

        // make each column
        return (
          <p className="square" key={colIndex} 
            onClick={() => {
              this.squareClick(colIndex, rowIndex);
              this.victory();
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