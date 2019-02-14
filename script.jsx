class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      board: [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]],
      turn: 0,
      xPlayer: 0,
      oPlayer: 0
    };
    this.squareClick = this.squareClick.bind(this);
    this.checkWin = this.checkWin.bind(this);
  }

  checkWin(board, symbol) {
    let checkCol = [];
    let checkRow = [];
    let checkSlash = [];
    let checkBackSlash = [];
    let reverse = parseInt(board.length) - 1;
    for (let i = 0; i < board.length; i++) {
      checkSlash.push(board[i][i]);
      checkBackSlash.push(board[i][reverse]);
      reverse = reverse - 1;
      for (let j = 0; j < board.length; j++) {
        checkCol.push(board[j][i]);
        checkRow.push(board[i][j]);
      }
      if (
        checkCol.length == board.length &&
        checkCol.every(arr => arr == symbol)
      ) {
        return true;
      } else if (
        checkRow.length == board.length &&
        checkRow.every(arr => arr == symbol)
      ) {
        return true;
      }
      checkCol = [];
      checkRow = [];
    }
    if (
      checkSlash.length == board.length &&
      checkSlash.every(arr => arr == symbol)
    ) {
      return true;
    } else if (
      checkBackSlash.length == board.length &&
      checkBackSlash.every(arr => arr == symbol)
    ) {
      return true;
    }
  }

  squareClick(row, col) {
    // console.log("starting", this.state.board);
    let updateBoard = this.state.board;
    let updateTurn = this.state.turn;
    let updatePlayerX = this.state.xPlayer;
    let updatePlayerO = this.state.oPlayer;
    if (this.state.turn % 2 == 0 && updateBoard[row][col] == " ") {
      updateBoard[row][col] = "X";
      this.setState({ board: updateBoard });
      updateTurn = this.state.turn + 1;
      if (this.checkWin(updateBoard, "X") == true) {
        alert(`Congratulations! Player X have won!`);
        return;
      }
    } else if (this.state.turn % 2 !== 0 && updateBoard[row][col] == " ") {
      updateBoard[row][col] = "O";
      this.setState({ board: updateBoard });
      updateTurn = this.state.turn + 1;
      if (this.checkWin(updateBoard, "O") == true) {
        alert(`Congratulations! Player O have won!`);
        updatePlayerO = this.state.oPlayer + 1;
        return;
      }
    } else {
      alert("Box is taken, please choose another box.");
    }
    // console.log("ending", updateBoard);
    const newState = {
      board: updateBoard,
      turn: updateTurn,
      xPlayer: updatePlayerX,
      oPlayer: updatePlayerO
    };
    this.setState(newState);
    // console.log("Board updated, turn is now: ", updateTurn);
  }

  render() {
    console.log("board", this.state.board);

    const board = this.state.board.map((row, rowIndex) => {
      const rows = row.map((col, colIndex) => {
        return (
          <div
            className="boo"
            key={colIndex}
            onClick={() => {
              this.squareClick(rowIndex, colIndex);
            }}
          >
            {col}
          </div>
        );
      });

      return (
        <div key={rowIndex} className="row">
          {rows}
        </div>
      );
    });

    return <div className="item">{board}</div>;
  }
}

class Game extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Board />;
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
