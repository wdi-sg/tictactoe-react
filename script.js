class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            squares: Array(9).fill(null),
            xIsNext: true,
            xScore: '',
            oScore: ''
        }
    }
// In React, however, it is a convention to use on[Event] names for props which represent events 
// and handle[Event] for the methods which handle the events.
    handleClick(i) {

        const squares = this.state.squares.slice();
        // return early by ignoring a click if someone has won the game or if a Square is already filled
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState ({
            squares: squares,
            // Each time a player moves, xIsNext (a boolean) will be flipped to determine 
            // which player goes next and the game’s state will be saved. We’ll update the 
            // Board’s handleClick function to flip the value of xIsNext
            xIsNext: !this.state.xIsNext,
            xScore: this.state.xScore,
            oScore: this.state.oScore
        });
    }
    // squareClick(column, row){
    //     console.log( "clicked column", column, "and row", row );
    // }

    renderSquare(i) {
      return (
        <Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
      ); 
    }
  
    render() {
        let xScore = 'X number of wins: ' + this.state.xScore;
        let oScore = 'O number of wins: ' + this.state.oScore;
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
            //how to restart game?
            this.state.squares.reset;
            if (winner == 'X') {
                xScore = xScore + 1;
            } else {
                oScore = oScore + 1;
            }
        } else {
            status = 'The next player is ' + (this.state.xIsNext ? 'X' : 'O');
        } 
        
      return (
        <div>
            <div className="scoreboard">{xScore}</div>
            <div className="scoreboard">{oScore}</div>
            <br></br>
            <div className="status">{status}</div>

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

//   ------------------------------------------------------------------------

// function components are a simpler way to write components that 
// only contain a render method and don’t have their own state. 
// They are less tedious to write than classes, and many components can be expressed this way.

    function Square(props) {
        return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
        );
    }
    

//   When we modified the Square to be a function component, we also changed onClick={() => this.props.onClick()} 
//   to a shorter onClick={props.onClick} (note the lack of parentheses on both sides). 
//   In a class, we used an arrow function to access the correct this value, but in a function component we don’t need to worry about this.

//   class Square extends React.Component {

//     render() {
//       return (
//         <button 
//             className="square" 
//             onClick = {() => this.props.onClick()}
//         >
//             {this.props.value}
//         </button>
//       );
//     }
//   }

// to check if a player has won.
    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
        for (let i = 0; i <lines.length; i++) {
            const [a,b,c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]
            }
        }
        return null;
        }

//   ------------------------------------------------------------------------

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
  
  // ========================================
  
  ReactDOM.render(<Game />,document.getElementById('root'));
  