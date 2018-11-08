class Board extends React.Component {
  render() {
    const board = this.props.board.map((row, rowIndex) => {
      const rows = row.map((col, colIndex) => (
        <div
          key={colIndex}
          className="square d-flex flex-column justify-content-center align-items-center"
          onClick={() => this.props.squareClick(rowIndex, colIndex)}
        >
          <span className="display-3 font-weight-bold">{col}</span>
        </div>
      ));
      return (
        <div key={rowIndex} className="row">
          {rows}
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
      board: [[null, '', ' '], [' ', null, ''], [' ', '', null]],
      turn: 0,
      player: 'X',
      win: false,
    };
  }

  squareClick = (row, col) => {
    console.log(row, col);
    let updateBoard = this.state.board.slice(0);
    let increment = this.state.turn;
    let currentplayer = this.state.player;
    this.state.turn % 2 == 0 ? (currentplayer = 'X') : (currentplayer = 'O');
    updateBoard[row][col] = currentplayer;
    increment++;
    this.setState({ turn: increment });
    this.setState({ board: updateBoard });
    this.setState({ player: currentplayer });
    if (this.state.turn >= 4) {
      if (checkWin(updateBoard)) {
        let winner = this.state.win;
        winner = true;
        this.setState({ win: winner });
      }
    }
  };

  render() {
    let status = <h1>ReacticTacToe</h1>;
    if (this.state.win) status = <h1>{this.state.player} WINS!</h1>;
    return (
      <div className="game">
        <Board board={this.state.board} squareClick={this.squareClick} />
        <div className="text-center m-2">{status}</div>
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
