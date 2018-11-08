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
    };
  }

  squareClick = (rowIndex, colIndex) => {
    const board = [...this.state.board];

    // Do nothing if player clicks a cell that's already marked.
    if (board[rowIndex][colIndex]) {
      return;
    }

    const turn = this.state.turn + 1;

    if (turn % 2 === 0) {
      board[rowIndex][colIndex] = 'O';
    } else {
      board[rowIndex][colIndex] = 'X';
    }

    this.setState({ turn, board });
  };

  render() {
    return <Board board={this.state.board} onSquareClick={this.squareClick} />;
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
