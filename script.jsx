class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      board: [["i", "i", "i"], ["i", "i", "i"], ["i", "i", "i"]],
      turn: "X"
    };
  }

  squareClick(col, row) {
    console.log(col + "-" + row);
    console.log(this.state.board[row][col]);
    if (this.state.turn === "X") {
      //place X on board
      this.state.board[row][col] = this.state.turn;
      //change turn
      this.state.turn = "O";
    } else if (this.state.turn === "O") {
      //place O on board
      this.state.board[row][col] = this.state.turn;
      //change turn
      this.state.turn = "X";
    }
    let newState = this.state;
    this.setState(newState);
  }

  render() {
    console.log("board", this.state.board);

    const board = this.state.board.map((row, rowIndex) => {
      // make a single row
      const rows = row.map((col, colIndex) => {
        // make each column
        return (
          <div
            className="boo"
            key={colIndex}
            onClick={() => {
              this.squareClick(colIndex, rowIndex);
            }}>
            {col} : {colIndex} : {rowIndex}
          </div>
        );
      });

      // return the complete row
      return (
        <div key={rowIndex} className="row">
          <div className="col d-flex justify-content-between">{rows}</div>
        </div>
      );
    });

    return <div className="item container">{board}</div>;
  }
}

ReactDOM.render(<Board />, document.getElementById("root"));
