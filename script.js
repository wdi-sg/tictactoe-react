function Cell(props) {
  return (
    <div className="cell" onClick={props.onClick}>
      {props.value}
    </div>
  )
}

class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        cells: Array(9).fill(null),
        xIsNext: true
      }
    }
    handleClick(i) {
      // Make a duplicate of the current cells array. React likes immutability, or else bad things happen.
      const cells = this.state.cells.slice();

      // Check whether there's already a winner, or whether the cell is already filled up. If so, we're done.
      if (winCondition(cells) || cells[i]) {
        return;
      };

      // Otherwise, change the appropriate cell value and update the state with the array and toggle whether 'X' goes next.
      cells[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        cells: cells,
        xIsNext: !this.state.xIsNext
      });
    }

    // Pass the board's state's cell array value and appropriate handleclick function to the cell.
    renderCell(i) {
      return <Cell 
        value={this.state.cells[i]} 
        onClick={() => this.handleClick(i)}
      />;
    }

    render() {
        const winner = winCondition(this.state.cells);
        let status = '';
        winner ? status = `Winner: ${winner}` : status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

        return (
          <div>
            <div className="status">{status}</div>
            <div className="row">
              {this.renderCell(0)}
              {this.renderCell(1)}
              {this.renderCell(2)}
            </div>
            <div className="row">
              {this.renderCell(3)}
              {this.renderCell(4)}
              {this.renderCell(5)}
            </div>
            <div className="row">
              {this.renderCell(6)}
              {this.renderCell(7)}
              {this.renderCell(8)}
            </div>
          </div>
        );
    }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);

function winCondition(cells) {
  // Check for 3 rows, 3 columns, and 2 diagonals.
  const toCheck = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Note: Don't use a .forEach here because you can't break that loop with a return statement
  for (let i = 0; i < toCheck.length; i++) {
    const [first, second, third] = toCheck[i];
    if (cells[first] !== null && cells[first] === cells[second] && cells[second] === cells[third]) {
      return cells[first];
    };
  };

  return null;
};
