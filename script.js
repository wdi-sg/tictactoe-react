class Names extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state={
    play0 : "test",
    play1 : ""
  }

  handleChange(player, event) {
    var name = event.target.value;
    if (player === "play0") {
      this.setState({
        play0 : name
      });  
    } else {
      this.setState({
        play1 : name
      });
    }
  }

  render() {
    return (
      <div>
        <h1><span>{this.state.play0}</span> VS <span>{this.state.play1}</span></h1>
        <label htmlFor="play0">Player 1</label>
        <input id="play0" type="text" onChange={(event) => this.handleChange("play0", event)}></input>
        <label htmlFor="play1">Player 2</label>
        <input id="play1" type="text" onChange={(event) => this.handleChange("play1", event)}></input>
      </div>
    );
  }
}

class Board extends React.Component {
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
      const rows = row.map( (col,colIndex) => {
        var name = colIndex.toString() + "," + rowIndex.toString();
        return (
          <span id={name} key={name} onClick={() => this.handleClick(rowIndex, colIndex)}>
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
      <div key="board" className="item">
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
        <Names/>
        <Board/>
      </div>
    )
  }

}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
