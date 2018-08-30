class Names extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state = {

    // player 0 and 1 names
    play0 : "",
    play1 : ""
  }

  // changes player names when name inputs changes
  handleChange(player, event) {
    var name = event.target.value.toUpperCase();
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

  // shows players names and inputs to change players names
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

  // changes board when a cell is clicked and updates the board
  handleClick(row, col) {
    var newBoard = this.state.board;
    if (newBoard[row][col] === "__") {
      if (this.props.turn === 0) {
        newBoard[row][col] = "X";
      } else {
        newBoard[row][col] = "O";
      }
    }
    // if (newBoard[row][col] === "__") {
    //     newBoard[row][col] = "X";  
    // } else if (newBoard[row][col] === "X") {
    //     newBoard[row][col] = "O";
    // } else {
    //     newBoard[row][col] = "__";
    // }
    this.setState( {board : newBoard} );
  }

  // shows board
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
    this.changeTurn = this.changeTurn.bind(this);
  }

  state = {

    // turn of player 0 or 1
    turn : 0
  }

  // changes turn of player
  changeTurn() {
    if (this.state.turn === 0) {
      this.setState({ turn : 1});
    } else {
      this.setState({turn : 0});
    }
  }

  // passes turn and changeTurn() into Names and Board components as props
  render() {
    return(
      <div>
        <Names turn={this.state.turn} changeTurn={this.changeTurn}/>
        <Board turn={this.state.turn} changeTurn={this.changeTurn}/>
      </div>
    )
  }

}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
