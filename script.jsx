class Board extends React.Component {
  render() {
    const { board, onSquareClick } = this.props;

    const boardItem = board.map((row, rowIndex) => {
      // make a single row
      const rows = row.map((col, colIndex) => {
        // make each column
        return (
          <p
            className="boo"
            key={colIndex}
            onClick={() => onSquareClick(rowIndex, colIndex)}
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

    return <div className="item">{boardItem}</div>;
  }
}

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      board: [['', '', ''], ['', '', ''], ['', '', '']],
      turn: 0,
      winner: '',
    };
  }

  squareClick = (rowIndex, colIndex) => {
    const board = [...this.state.board];

    // Do nothing if player clicks a cell that's already marked.
    if (board[rowIndex][colIndex] || this.state.winner) {
      return;
    }

    const turn = this.state.turn + 1;

    if (turn % 2 === 0) {
      board[rowIndex][colIndex] = 'O';
    } else {
      board[rowIndex][colIndex] = 'X';
    }

    const winner = this.checkWinState(board);

    this.setState({ turn, board, winner });
  };

  checkWinState = board => {
    // Top row
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
      return board[0][0];
    }

    // Middle row
    if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
      return board[1][0];
    }

    // Bottom row
    if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
      return board[2][0];
    }

    // Left column
    if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
      return board[0][0];
    }

    // Middle column
    if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
      return board[0][1];
    }

    // Right column
    if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
      return board[0][2];
    }

    // Top left to bottom right diagonal
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return board[0][0];
    }

    // Top right to bottom left diagonal
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return board[0][2];
    }

    return '';
  };

  render() {
    const { board, winner } = this.state;

    return (
      <div>
        <Board board={board} onSquareClick={this.squareClick} />
        {winner && <p className="winner">Winner: {winner}</p>}
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
