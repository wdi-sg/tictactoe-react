class Board extends React.Component {
    
	//testing
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    board : [
      ['__','__','__'],
      ['__','__','__'],
      ['__','__','__']
    ]
  }

  handleClick(row, col) {
    var newBoard = this.state.board;

    if (newBoard[row][col] === "__") {
        newBoard[row][col] = "X";  
    } else if (newBoard[row][col] === "X") {
        newBoard[row][col] = "O";
    } else {
        newBoard[row][col] = "__";
    }

    this.setState( {board : newBoard} );
  }

  render() {
    const board = this.state.board.map( (row,rowIndex) => {
      const rows = row.map( (col,colIndex) => { return (
              <span id="{colIndex},{rowIndex}" onClick={((ev) => this.handleClick(rowIndex, colIndex))}>
                | {col}
              </span>
            );
          });
      return (
        <div className="row">
          {rows}
        </div>
      );

    });

    return (
      <div className="item">
        {board}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Board/>
      </div>
    )
  }

}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
