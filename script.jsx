function Square(props) {
  return (
    <button 
      className="square" 
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {

    return (
      <div>
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

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1];
    const squares = current.squares.slice();

    if(calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext? 'X':'O';

    this.setState({
      history: history.concat([{
        squares: squares,
      }]), 
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step%2) === 0,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) =>{
      const desc = move ? 'Go to move #'+ move : 'Go to game start';
      return (
        <li key={move}>
          <button
            onClick={() => this.jumpTo(move)}
          >
          {desc}
          </button>
        </li>
      )
    });

    let status;
    if (winner) {
      status = 'Winner:' + winner;
    } else {
      status = 'Next player:'+(this.props.xIsNext? 'X':'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


// class Board extends React.Component {
//     constructor(){

//       super()

//       this.state = {
//         count: 0,
//         board: [
//           ['?','?','?'],
//           ['?','?','?'],
//           ['?','?','?']
//         ]
//       }

//     }

//     squareClick(count, rowIndex, colIndex){

//         // console.log( rowIndex+":"+colIndex);

//         // let changeSymbol;
//         let updateCount;
//         let updateBoard;
//         const cross = 'X';
//         const naught = 'O';

//         console.log(count);

//         if (count%2===0 && this.state.board[rowIndex][colIndex] === '?') {
//           this.state.board[rowIndex][colIndex] = cross;
//           updateCount = count+1;
//         } else if (count%2!=0 && this.state.board[rowIndex][colIndex] === '?') {
//           this.state.board[rowIndex][colIndex] = naught;
//           updateCount = count+1;
//         }

//         // this.state.board[rowIndex][colIndex] = changeSymbol;
//         updateBoard = {count: updateCount, board: this.state.board}
//         this.setState(updateBoard);
//     }

//     render() {
//         console.log("board", this.state.board);

//         const board = this.state.board.map( (row,rowIndex) => {

//           // make a single row
//           const rows = row.map( (col,colIndex) => {

//             // make each column
//             return (
//                     <p
//                         className="cell"
//                         key={colIndex}
//                         onClick={()=>{
//                             this.squareClick(this.state.count, rowIndex, colIndex);
//                         }}

//                     >
//                         {col}
//                     </p>
//             );

//           });

//           // return the complete row
//           return (
//             <div key={rowIndex} className="row">
//               {rows}
//             </div>

//           );

//         });

//         return (
//           <div className="item">
//             {board}
//           </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Board/>,
//     document.getElementById('root')
// );
