class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      board: [["i", "i", "i"], ["i", "i", "i"], ["i", "i", "i"]],
      turn: 0
    };
    this.squareClick = this.squareClick.bind(this);
  }

  squareClick(row, col) {
    console.log("starting", this.state.board);
    let updateBoard = this.state.board;
    let updateTurn = this.state.turn;
    if (this.state.turn % 2 == 0 && updateBoard[row][col] == "i") {
      updateBoard[row][col] = "X";
      updateTurn = this.state.turn + 1;
    } else if (this.state.turn % 2 !== 0 && updateBoard[row][col] == "i") {
      updateBoard[row][col] = "O";
      updateTurn = this.state.turn + 1;
    } else {
      alert("Box is taken, please choose another box.");
    }
    console.log("ending", updateBoard);
    const newState = { board: updateBoard, turn: updateTurn };
    this.setState(newState);
    console.log("Board updated, turn is now: ", updateTurn);
  }

  render() {
    console.log("board", this.state.board);

    const board = this.state.board.map((row, rowIndex) => {
      // make a single row
      const rows = row.map((col, colIndex) => {
        // make each column
        return (
          <button
            className="boo"
            key={colIndex}
            onClick={() => {
              this.squareClick(rowIndex, colIndex);
            }}
          >
            {col}
          </button>
        );
      });

      // return the complete row
      return (
        <div key={rowIndex} className="row">
          {rows}
        </div>
      );
    });

    return <div className="item">{board}</div>;
  }
}

ReactDOM.render(<Board />, document.getElementById("root"));
