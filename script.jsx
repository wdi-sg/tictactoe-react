class Board extends React.Component {
  render() {
    const board = this.props.board.map((row, rowIndex) => {
      const cols = row.map((col, colIndex) => (
        <div
          key={colIndex}
          className="square d-flex flex-column justify-content-center align-items-center"
          onClick={() => this.props.squareClick(colIndex, rowIndex)}
        >
          <span className="display-3 font-weight-bold">{col}</span>
        </div>
      ));
      return (
        <div key={rowIndex} className="column">
          {cols}
        </div>
      );
    });
    return <div className="grid">{board}</div>;
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [['*', '*', '*'], ['*', '*', '*'], ['*', '*', '*']],
      turn: 0,
    };
  }

  squareClick = (row, col) => {
    console.log('row:', row, 'col:', col);
    let updateBoard = this.state.board.slice(0);
    this.state.turn % 2 == 0 ? (updateBoard[col][row] = 'X') : (updateBoard[col][row] = 'O');
    this.setState({ board: updateBoard });
    this.state.turn++;
  };

  render() {
    return (
      <div className="game">
        <Board board={this.state.board} squareClick={this.squareClick} />
      </div>
    );
  }
}

ReactDOM.render(
  <div className="container-fluid h-100">
    <div className="d-flex h-100 flex-column align-items-center justify-content-center">
      <Game />
    </div>
  </div>,
  document.getElementById('root'),
);
