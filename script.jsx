
function createArray(length) {

  var arr = new Array(length || 0),
      i = length;

  if (arguments.length > 1) {
      var args = Array.prototype.slice.call(arguments, 1);
      while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }

  return arr
}

function Square(props) {
  if (props.isHighlight) {
    return (
      <button className="square highlight" onClick={props.onClick}>
        {props.value}
      </button>
    );
  } else {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
  }
}

class Board extends React.Component {

  renderSquare(row, col) {
    var data = this.props.squares[row][col];

    var isHighlight = false;

    this.props.highlight.forEach(element => {
      if (element.row === row && element.col === col) {
          isHighlight = true;
      }
    });

    return (
      <Square key = {row * this.props.colCount + col}
              value = {data !== '' ? data : ''}
              isHighlight = {isHighlight}
              onClick = {() => this.props.onClick(row, col)}>
      </Square>
    );
  }

  renderRow(row) {
    var squares = this.props.squares[row].map((val, index) => {
      return this.renderSquare(row, index);
    });

    return (
      <div className="row" key={row}>
        {squares}
      </div>
    );
  }

  renderBoard() {
    return Array(this.props.rowCount).fill(1).map((val, index) => {
      return this.renderRow(index);
    });
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
    )
  }
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      rowCount: 5,
      colCount: 5,
      squares: [],
      history: [],
      winner: '',
      stepCount: 0
    };

    this.state.history.push({ row: -1, col: -1 });
    this.state.squares = createArray(this.state.rowCount, this.state.colCount);

    for (let i = 0; i < this.state.rowCount; i++) {
      for (let j = 0; j < this.state.colCount; j++) {
          this.state.squares[i][j] = '';
      }
    }
  }

  handleClick(row, col) {
    var squares = this.state.squares.slice();
    var history = this.state.history.slice(0, this.state.stepCount + 1);

    if (squares[row][col] || this.state.winner != '') {
      return;
    }

    history.push({ row: row, col: col });

    this.setState({
      squares: squares,
      history: history,
      stepCount: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  changeBoard() {
    let numRow = parseInt(document.querySelector("#rows").value)
    let numCol = parseInt(document.querySelector("#cols").value)

    if ( numRow != NaN && numRow > 0 && numCol != NaN && numCol > 0 ) {
      this.setState({
        rowCount: numRow,
        colCount: numCol,
      });
    }
  }

  render() {

    var squares = this.state.squares.slice();
    var curHistory = this.state.history.slice();
    var curSquare = curHistory[curHistory.length - 1];

    var highlight = [];
    highlight.push({ row: curSquare.row, col: curSquare.col });

    // Resetting the board
    for ( let i = 0; i < this.state.rowCount; i++ ) {
      for ( let j = 0; j < this.state.colCount; j++ ) {
        squares[i][j] = '';
      }
    }

    // Setting values from history
    for ( let i = 1; i < curHistory.length; i++ ) {
      squares[curHistory[i].row][curHistory[i].col] = (i % 2 == 0 ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="board">
          <Board
            squares={squares}
            rowCount={this.state.rowCount}
            colCount={this.state.colCount}
            highlight={highlight}
            onClick={(row, col) => this.handleClick(row, col)}
          />
        </div>
        <div>Rows: <input type="number" id='rows'/></div>
        <div>Columns: <input type="number" id='cols'/><button onClick={() => this.changeBoard()}>Change State</button></div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);