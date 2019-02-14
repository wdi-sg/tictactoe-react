class Board extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
          squares: Array(9).fill(null),
          nextX: true,
          scoreX: 0,
          scoreO: 0,
        };
    }

    handleClick(i) {
        // console.log(this, i)
        const squares = this.state.squares.slice();
        //Check for winner and squares that not null
        if (winner(squares) || squares[i]) {
          return;
        }
        else if(this.state.nextX == true){
            squares[i] = 'X'
            this.setState({
              squares: squares,
              nextX: false,
            });
        }
        else{
            squares[i] = 'O'
            this.setState({
              squares: squares,
              nextX: true,
            });
        }
    }

    handleReset(victor){
        console.log(this, victor)
        if(victor == 'X'){
            let currentScore = this.state.scoreX + 1;
            this.setState({scoreX: currentScore});
            // console.log(currentScore, this.state)
        }
        else if(victor == 'O'){
            let currentScore = this.state.scoreO + 1;
            this.setState({scoreO: currentScore});
            // console.log(currentScore)
        }
        else{
            this.setState({squares: Array(9).fill(null)});
        }
        this.setState({squares: Array(9).fill(null)});
    }

    renderSquare(i) {
        return (
          <Square value={this.state.squares[i]} onClick={() => {this.handleClick(i)}}/>
        );
    }

    render() {
        const win = winner(this.state.squares);
        let status;
        if (win) {
          status = 'Winner: ' + win;
        }
        else {
          if(this.state.nextX == true){
              status = 'Current player: X';
          }
          else if(this.state.nextX == false){
              status = 'Current player: O';
          }
        }
        return (
            <div className="board">
                <div className="status">{status}
                    <p>X score: {this.state.scoreX}</p>
                    <p>O score: {this.state.scoreO}</p>
                    <button onClick={() => {this.handleReset(win)}}>New Game</button>
                    <hr/>
                </div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
            );
    }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Game extends React.Component {
    render() {
        return (
          <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
            </div>
          </div>
        );
    }
}

function winner(squares) {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < win.length; i++) {
    //Iterate win array and give row and column nested array its value
    const [a, b, c] = win[i];
    // console.log(win[i])
    //Check each row and column for 3 same value
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
    );