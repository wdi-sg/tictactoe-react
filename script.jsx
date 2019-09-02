class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      board: [["i", "i", "i"], ["i", "i", "i"], ["i", "i", "i"]],
      count: 0
    };

    this.squareClick = this.squareClick.bind(this);
  }

  squareClick(rowIndex, colIndex) {
    let currentBoard = this.state.board;
    if (this.state.count % 2 == 0 && currentBoard[rowIndex][colIndex] == "i") {
      currentBoard[rowIndex][colIndex] = "O";
      this.setState({ board: currentBoard });
      ++this.state.count;
      console.log("O", this.setState({ board: currentBoard }));
    } else if (currentBoard[rowIndex][colIndex] == "i") {
      currentBoard[rowIndex][colIndex] = "X";
      this.setState({ board: currentBoard });
      ++this.state.count;
      console.log("X", this.setState({ board: currentBoard }));
    }

    console.log("count", this.state.count);
    console.log("rows and columns", rowIndex, colIndex);
  }

  render() {
    console.log("board", this.state.board);

    const board = this.state.board.map((row, rowIndex) => {
      // make a single row
      const rows = row.map((col, colIndex) => {
        // make each column
        return (
          <button
            onClick={() => {
              this.squareClick(rowIndex, colIndex);
            }}
          >
            {col}
          </button>
        );
      });

      // return the complete row
      return <div className="row">{rows}</div>;
    });

    return <div>{board}</div>;
  }
}

ReactDOM.render(<Board />, document.getElementById("root"));
